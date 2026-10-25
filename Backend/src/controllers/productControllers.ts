import { request, type Request, type Response } from "express";
import Product from "../models/Products.js";
import cloudinary from "../config/cloudinary.js";
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
    const { name, price, category, imageId } = req.body;

    if (!imageId) {
      return res.status(400).json({
        message: "Image ID is required",
      });
    }

    // Generate the Pexels image URL
    const imageUrl = `https://images.pexels.com/photos/${imageId}/pexels-photo-${imageId}.jpeg?auto=compress&cs=tinysrgb&w=800`;

    // Upload the image to Cloudinary
    const uploadedImage = await cloudinary.uploader.upload(imageUrl, {
      folder: "ecommerce/products",
    });

    // Save product with the Cloudinary URL
    const product = await Product.create({
      name,
      price,
      category,
      image: uploadedImage.secure_url,
    });

    return res.status(201).json(product);
  } catch (error) {
    console.error("Create product error:", error);

    return res.status(400).json({
      message: "Failed to create product",
    });
  }
};
export const getProductById = async (
  req: Request,
  res: Response
) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) { 
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json(product);
  } catch {
    return res.status(400).json({
      message: "Invalid product ID",
    });
  }
};
export const updateProduct = async (
  req: Request,
  res: Response
) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch {
    return res.status(400).json({ message: "Failed to update product" });
  }
};
export const createManyProducts = async (
  req: Request,
  res: Response
) => {
  try {
    const products = req.body;

    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({
        message: "Send a non-empty array of products",
      });
    }

    const preparedProducts = await Promise.all(
      products.map(async (item) => {
        const imageUrl =
          `https://images.pexels.com/photos/${item.imageId}/pexels-photo-${item.imageId}.jpeg?auto=compress&cs=tinysrgb&w=800`;

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

    const savedProducts = await Product.insertMany(preparedProducts);

    return res.status(201).json({
      message: "Products created successfully",
      count: savedProducts.length,
      products: savedProducts,
    });
  } catch (error) {
    console.error("Bulk product error:", error);
    return res.status(400).json({
      message: "Failed to create products. Check the terminal error.",
    });
  }
};