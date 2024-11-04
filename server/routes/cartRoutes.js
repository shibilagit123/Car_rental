import e from "express";
import { authUser } from "../middlewares/authUser.js";
import { addCarToCart, getCart, removeCarFromCart } from "../controllers/cartControllers.js";
const router = e.Router();

router.post("/add-to-cart",authUser,addCarToCart);
router.get("/get-cart", authUser, getCart);
router.delete("/remove-Cart",authUser, removeCarFromCart);

export { router as cartRouter };
