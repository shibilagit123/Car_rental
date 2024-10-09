import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      minLength: 20,
      maxLength: 300,
    },
   
  },
  { timestamps: true }
);

export const Brand = mongoose.model("Brand", brandSchema);
