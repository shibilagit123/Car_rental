import e from "express";
import { authUser } from "../middlewares/authUser.js";
import { addOrder, getOrder } from "../controllers/orderControllers.js";
const router = e.Router();

router.post("/addOrder",authUser,addOrder);
router.get("/getorder", authUser, getOrder);

export { router as orderRouter };
