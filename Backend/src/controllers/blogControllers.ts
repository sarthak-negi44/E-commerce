import type { Request, Response } from "express";
import blog from "../models/Blog.model.js";

export const getBlogs = async (_req: Request, res: Response) => {
  try {
    const blogs = await blog.find();
    res.status(200).json(blogs);
  } catch {
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
};

export const createBlog = async (req: Request, res: Response) => {
  try {
    const blogPost = await blog.create(req.body);
    res.status(201).json(blogPost);
  } catch (error) {
    res.status(400).json({ message: "Failed to create blog post" });
  }
};
export const getBlogById = async (
  req: Request,
  res: Response
) => {
  try {
    const blogPost = await blog.findById(req.params.id);

    if (!blogPost) { 
      return res.status(404).json({
        message: "Blog post not found",
      });
    }

    return res.status(200).json(blogPost);
  } catch {
    return res.status(400).json({
      message: "Invalid blog post ID",
    });
  }
};
export const updateBlog = async (
  req: Request,
  res: Response
) => {
  try {
    const blogPost = await blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!blogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    return res.status(200).json(blogPost);
  } catch {
    return res.status(400).json({ message: "Failed to update blog post" });
  }
};