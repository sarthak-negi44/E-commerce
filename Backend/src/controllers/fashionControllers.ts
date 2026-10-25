import type { Request, Response } from "express";
import cloudinary from "../config/cloudinary.js";
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
export const createManyFashionItems = async (
  req: Request,
  res: Response
) => {
  try {
    const fashionItems = req.body;

    if (!Array.isArray(fashionItems) || fashionItems.length === 0) {
      return res.status(400).json({
        message: "Send a non-empty array of fashion items",
      });
    }

    const preparedProducts = await Promise.all(
      fashionItems.map(async (item) => {
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

    const savedFashionItems = await FashionCollection.insertMany(preparedProducts);

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