import e from "express";
const router = e.Router();
import { userRouter } from "./userRoutes.js";


router.use('/user',userRouter)





export {router as apiRouter}



