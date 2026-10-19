import { Router } from "express";
import { getBlogs, createBlog, updateBlog, getBlogById } from "../controllers/blogControllers.js";
const router = Router();
router.get("/", getBlogs);
router.post("/", createBlog);
router.get("/:id", getBlogById);
router.put("/:id", updateBlog);
export default router;