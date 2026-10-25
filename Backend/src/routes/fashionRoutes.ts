import { Router } from "express";
import { getFashionItems, createFashion, updateFashionItem, getFashionItemById,createManyFashionItems } from "../controllers/fashionControllers.js";
const router = Router();
router.get("/", getFashionItems);
router.post("/", createFashion);
router.post("/bulk", createManyFashionItems);
router.get("/:id", getFashionItemById);
router.put("/:id", updateFashionItem);
export default router;
