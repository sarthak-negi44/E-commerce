import connectDB from "./config/db.js";
import express from "express";
import cors from "cors";
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();