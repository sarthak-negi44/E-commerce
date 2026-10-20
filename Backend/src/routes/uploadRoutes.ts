import { Router } from "express";
import upload from "../config/multer.js";
import { uploadImage } from "../controllers/uploadControllers.js";

const router = Router();

router.post("/", upload.single("image"), uploadImage);

export default router;