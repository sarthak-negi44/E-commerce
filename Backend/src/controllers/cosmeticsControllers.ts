import type { Request, Response } from "express";
import Cosmetics from "../models/Cosmetics.model.js";
import cloudinary from "../config/cloudinary.js";
import FashionCollection from "../models/Fashion.model.js";
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
export const createManyCosmetics = async (
  req: Request,
  res: Response
) => {
  try {
    const cosmetics = req.body;

    if (!Array.isArray(cosmetics) || cosmetics.length === 0) {
      return res.status(400).json({
        message: "Send a non-empty array of cosmetics",
      });
    }

    const preparedFashions = await Promise.all(
      cosmetics.map(async (item) => {
        const imageUrl =
          item.image ||
          "https://res.cloudinary.com/dxjv8qg0f/image/upload/v1697041234/ecommerce/products/default-fashion-item.jpg";
        const uploadedImage = await cloudinary.uploader.upload(
          imageUrl,
          { folder: "ecommerce/products" }
        );

        return {
          name: item.name,
          price: item.price,
          category: item.category,
          image: uploadedImage.secure_url,
          description: item.description ?? "",
          stock: item.stock ?? 0,
        };
      })
    );

    const savedFashionItems = await FashionCollection.insertMany(preparedFashions);

    return res.status(201).json({
      message: "Fashion items created successfully",
      count: savedFashionItems.length,
      products: savedFashionItems,
    });
  } catch (error) {
    console.error("Bulk fashion item error:", error);
    return res.status(400).json({
      message: "Failed to create fashion items. Check the terminal error.",
    });
  }
};