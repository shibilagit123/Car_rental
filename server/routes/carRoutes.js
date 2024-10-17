import e from "express";
import { authUser } from "../middlewares/authUser.js";
import { createCar, deletecar, fetchcarsDetails, findAllcars, updateCar } from "../controllers/carControllers.js";
import { upload } from "../middlewares/multer.js";
const router = e.Router();


router.get("/all-cars", authUser, findAllcars);
router.get("/carDetails/:id", authUser, fetchcarsDetails);
router.post("/create", authUser, upload.single('image'), createCar);
router.put("/update",authUser,upload.single('image'), updateCar);
router.delete("/delete",authUser,deletecar);

// router.get("/all-cars", findAllcars);
// router.get("/carDetails/:id", fetchcarsDetails);
// router.post("/create",  upload.single('image'), createCar);
// router.put("/update",upload.single('image'), updateCar);
// router.delete("/delete",deletecar);

export { router as carRouter };
