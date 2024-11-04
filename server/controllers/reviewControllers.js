
import { Car } from "../models/carModel.js";
import { Review } from "../models/reviewModel.js";
import { authUser } from "../middlewares/authUser.js";

export const addReview = async (req, res) => {
    try {
        const userId = req.user._id;
        const { carId,rating,comment} = req.body;
       
    console.log(authUser);
        // Find the car to ensure it exists and fetch its price
        const car= await Car.findById(carId);
        if (!car) {
            return res.status(404).json({ message: "Car not found" });
        }

        // Find the user's review or create a new one if it doesn't exist
        let review = await Review.findOne({ userId });
        if (!review) {
            review = new Review({ userId, cars: [] });
        }

        // // Check if the car is already in the review
        // const reviewExists = review.car.some((item) => item.carId.equals(carId));
        // if (reviewExists) {
        //     return res.status(400).json({ message: "Review already exist" });
        // }

        // Add the car to the review
        review.car.push({
            carId,
           comment,
           rating,

        });
        review.userId = userId
        console.log(review,"review");
        
        // Recalculate the total price
        // review.calculateTotalPrice();

        await review.save();

        res.status(200).json({ message: " Review added", data: review });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error });
    }
};

export const removeReview = async (req, res) => {
    try {
        const userId = req.user.id;
       console.log(req);
        const { carId,rating,comment} = req.body;
      
        // Find the user's review
        let review = await Review.findOne({ userId });
        // const reviewId = review
        console.log(review);
        if (!review) {
            return res.status(404).json({ message: "review not found" });
        }
        else{
            // const review = await Review.findByIdAndDelete(reviewId)

        if(!review){
            return res.status(404).json({message:"review not found"})
        }

        res.json({ message: "Review deleted successfully" });
        }

     
        // Remove the car from the review
        // review.car = review.car.filter((item) => !item.carId.equals(carId));

        // Recalculate the total price
       

        // Save the review
        // await review.save();

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};
