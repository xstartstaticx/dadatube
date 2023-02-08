import express from "express";
import { list, add } from "../controllers/videoController.js";
import auth from "../middlewares/auth.js";

import multer from "multer";

import cloudinaryV2 from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

const cloudinary = cloudinaryV2.v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "dadatube",
    format: async (req, file) => {
      console.log("file inside multer", file);

      let extension = "";

      if (file.mimetype.includes("image")) extension = file.mimetype.slice(6);

      return extension;
    },
    public_id: (req, file) => `${req.user}-videoImage`,
  },
});

const multerMiddleware = multer({ storage });

const router = express.Router();

router.post("/add", multerMiddleware.single("image"), add);
router.get("/list", list);

export default router;
