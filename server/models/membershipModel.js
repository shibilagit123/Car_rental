import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema(
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
      minLength: 5,
      maxLength: 300,
    },
    amount:
    {
      type:String,
      required:true,
    },
    validity:
    {
      type:String,
      required:true,
    },
   
  },
  { timestamps: true }
);

export const Membership = mongoose.model("Membership", membershipSchema);
