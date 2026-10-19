import { Router } from "express";
import { getCosmeticById, createCosmetic,updateCosmetic, getCosmetic } from "../controllers/cosmeticsControllers.js";
const router = Router();
router.get("/", getCosmetic);
router.post("/", createCosmetic);
router.get("/:id", getCosmeticById);
router.put("/:id", updateCosmetic);
export default router;
