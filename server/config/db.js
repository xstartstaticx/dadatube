import mongoose from "mongoose";

export default async function () {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error connecting to DB", error.message);

    process.exit(1);
  }
}
