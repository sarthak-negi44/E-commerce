import { Router } from "express";
import { getProducts, createProduct, updateProduct, getProductById, createManyProducts} from "../controllers/productControllers.js";
const router = Router();
router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.post("/bulk", createManyProducts)
export default router;
