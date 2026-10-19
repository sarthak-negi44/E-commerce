import { Router } from "express";
import { getProducts, createProduct, updateProduct, getProductById } from "../controllers/productControllers.js";
const router = Router();
router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
export default router;
