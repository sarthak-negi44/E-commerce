import { Router } from "express";
import { getCosmeticById, createCosmetic,updateCosmetic, getCosmetic,createManyCosmetics } from "../controllers/cosmeticsControllers.js";
const router = Router();
router.get("/", getCosmetic);
router.post("/", createCosmetic);
router.post("/bulk", createManyCosmetics);
router.get("/:id", getCosmeticById);
router.put("/:id", updateCosmetic);
export default router;
