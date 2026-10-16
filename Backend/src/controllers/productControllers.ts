import type { Request, Response } from "express";
import Product from "../models/Products.js";

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: "Failed to create product" });
  }
};