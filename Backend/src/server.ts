import connectDB from "./config/db.js";
import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();