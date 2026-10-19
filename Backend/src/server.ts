import connectDB from "./config/db.js";
import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import cosmeticRoutes from "./routes/cosmeticRoute.js";
import fashionRoutes from "./routes/fashionRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/cosmetis", cosmeticRoutes);
app.use("/api/fashions", fashionRoutes);
app.use("/api/blogs", blogRoutes);

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();