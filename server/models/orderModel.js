import { Schema, model } from "mongoose";

const orderSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
      
        car: [
            {
                carId: {
                    type: Schema.Types.ObjectId,
                    ref: "Car",
                    required: true,
                },
                days: {
                    type: Number,
                    required: true,
                },
                time: {
                    type: Number,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
            },
        ],
        totalPrice: {
            type: Number,
            required: true,
            default: 0,
        },
        membershipId:{
            type: Schema.Types.ObjectId,
            ref: "memebership",
        },
        days:{
            type: Number,
            required: true,
            default: 1,
        },
        proof:{
          type:string,
          required:true,
          
        },
        proof:{
             type:String,
		    default: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
        },

        status:{
            type:String,
            required:true,
            default:1,
        },
        payment_status:{
            type:String,
            required:true,
            default:1,
        }


    },
    { timestamps: true }
);



export const Checkout = model("Checkout", checkoutSchema);


