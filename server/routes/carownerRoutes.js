import e from "express";
import { authUser } from "../middlewares/authUser.js";
import { createcarowner, deletecarowner, fetchcarownerDetails, findAllcarowners, updatecarowner } from "../controllers/carownerControllers.js";
import { upload } from "../middlewares/multer.js";
const router = e.Router();



// router.get("/all-carowner", findAllcarowner);
// router.get("/carDetails/:id", fetchcarownerDetails);
// router.post("/create",  upload.single('image'), createCar);
// router.put("/update",upload.single('image'), updateCar);
// router.delete("/delete",deletecar);

router.get("/all-carowner", authUser, findAllcarowners);
router.get("/carownerDetails/:id", authUser, fetchcarownerDetails);
router.post("/create", authUser, upload.single('image'), createcarowner);
router.put("/update",authUser,upload.single('image'), updatecarowner);
router.delete("/delete",authUser,deletecarowner);

export { router as carownerRouter };
