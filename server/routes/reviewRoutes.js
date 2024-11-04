import e from "express";
import { authUser } from "../middlewares/authUser.js";
import { addReview, removeReview } from "../controllers/reviewControllers.js";
const router = e.Router();

router.post("/addReview",authUser,addReview);
router.delete("/removeReview",authUser,removeReview);

export { router as reviewRouter };
