import type { Request, Response } from "express";
import Cosmetics from "../models/Cosmetics.model.js";
export const getCosmetic = async (_req: Request, res: Response) => {
  try {
    const cosmetics = await Cosmetics.find();
    res.status(200).json(cosmetics);
  } catch {
    res.status(500).json({ message: "Failed to fetch cosmetics" });
  }
};

export const createCosmetic = async (req: Request, res: Response) => {
  try {
    const cosmetic = await Cosmetics.create(req.body);
    res.status(201).json(cosmetic);
  } catch (error) {
    res.status(400).json({ message: "Failed to create cosmetic" });
  }
};
export const getCosmeticById = async (
  req: Request,
  res: Response
) => {
  try {
    const cosmetic = await Cosmetics.findById(req.params.id);

    if (!cosmetic) { 
      return res.status(404).json({
        message: "Cosmetic not found",
      });
    }

    return res.status(200).json(cosmetic);
  } catch {
    return res.status(400).json({
      message: "Invalid cosmetic ID",
    });
  }
};
export const updateCosmetic = async (
  req: Request,
  res: Response
) => {
  try {
    const cosmetic = await Cosmetics.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!cosmetic) {
      return res.status(404).json({ message: "Cosmetic not found" });
    }

    return res.status(200).json(cosmetic);
  } catch {
    return res.status(400).json({ message: "Failed to update cosmetic" });
  }
};