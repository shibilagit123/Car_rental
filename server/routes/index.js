import e from "express";
const router = e.Router();
import cookieParser from "cookie-parser";
import { userRouter } from "./userRoutes.js";
import { carRouter } from "./carRoutes.js";
import { carownerRouter } from "./carownerRoutes.js";
import { brandRouter } from "./brandRoutes.js";
import { cartRouter } from "./cartRoutes.js";
import { membershipRouter } from "./membershipRoutes.js";
import { reviewRouter } from "./reviewRoutes.js";

const port = 3000;

const app = e();

app.use(cookieParser());
router.use('/user',userRouter)
router.use('/car',carRouter)
router.use('/carowner',carownerRouter)
router.use('/brand',brandRouter)
router.use('/cart',cartRouter)
router.use('/membership',membershipRouter)
router.use('/review',reviewRouter)
export {router as apiRouter}



