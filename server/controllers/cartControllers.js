import { Cart } from "../models/cartModel.js";
import { Car } from "../models/carModel.js";
import { authUser } from "../middlewares/authUser.js";

export const getCart = async (req, res, next) => {
    try {
        const { user } = req;
        const cart = await Cart.findOne({ userId: user.id }).populate("cars.carId");

        if (!cart) {
            return res.status(404).json({ message: "cart is empty" });
        }

        res.json({ message: "cart details fetched", data: cart });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};

export const addCarToCart = async (req, res) => {
    try {
        const userId = req.user._id;
        const { carId ,membershipId,days,totalPrice,time,} = req.body;
       
    console.log(authUser)
        // Find the car to ensure it exists and fetch its price
        const car= await Car.findById(carId);
        if (!car) {
            return res.status(404).json({ message: "Car not found" });
        }

        // Find the user's cart or create a new one if it doesn't exist
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, cars: [] });
        }

        // Check if the car is already in the cart
        const carExists = cart.car.some((item) => item.carId.equals(carId));
        if (carExists) {
            return res.status(400).json({ message: "Car already in cart" });
        }

        // Add the car to the cart
        cart.car.push({
            carId,
            price: car.price,
            membershipId,
            days,
            time,
            totalPrice,

        });
        cart.userId = userId
        console.log(cart,"cart");
        
        // Recalculate the total price
        // cart.calculateTotalPrice();

        await cart.save();

        res.status(200).json({ message: "added to cart", data: cart });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error });
    }
};

export const removeCarFromCart = async (req, res) => {
    try {
        const userId = req.user._id;
        const membershipId =req.body;
         const days = req.body;
         const totalPrice = req.body;
        const { carId } = req.body;

        // Find the user's cart
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        // Remove the car from the cart
        cart.car = cart.car.filter((item) => !item.carId.equals(carId));

        // Recalculate the total price
        cart.calculateTotalPrice();

        // Save the cart
        await cart.save();

        res.status(200).json({ message: "Car removed from cart", data: cart });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};
