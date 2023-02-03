import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

db();

app.use(cookieParser());
app.use(express.json());
app.use("/users", userRoutes);

const port = process.env.PORT || 4001;
app.listen(port, () => console.log("Server is up and running at port:", port));
