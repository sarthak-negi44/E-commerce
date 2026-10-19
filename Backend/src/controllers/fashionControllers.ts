import type { Request, Response } from "express";
import FashionCollection from "../models/Fashion.model.js";
export const getFashionItems = async (_req: Request, res: Response) => {
  try {
    const items = await FashionCollection.find();
    res.status(200).json(items);
  } catch {
    res.status(500).json({ message: "Failed to fetch fashion items" });
  }
};

export const createFashion = async (req: Request, res: Response) => {
  try {
    const fashion = await FashionCollection.create(req.body);
    res.status(201).json(fashion);
  } catch (error) {
    res.status(400).json({ message: "Failed to create fashion item" });
  }
};
export const getFashionItemById = async (
  req: Request,
  res: Response
) => {
  try {
    const fashionItem = await FashionCollection.findById(req.params.id);

    if (!fashionItem) { 
      return res.status(404).json({
        message: "Fashion item not found",
      });
    }

    return res.status(200).json(fashionItem);
  } catch {
    return res.status(400).json({
      message: "Invalid fashion item ID",
    });
  }
};
export const updateFashionItem = async (
  req: Request,
  res: Response
) => {
  try {
    const fashionItem = await FashionCollection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!fashionItem) {
      return res.status(404).json({ message: "Fashion item not found" });
    }

    return res.status(200).json(fashionItem);
  } catch {
    return res.status(400).json({ message: "Failed to update fashion item" });
  }
};