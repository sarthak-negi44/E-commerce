import mongoose from "mongoose";

const fashionCollectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const FashionCollection = mongoose.model(
  "FashionCollection",
  fashionCollectionSchema
);

export default FashionCollection;