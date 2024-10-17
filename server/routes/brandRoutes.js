import e from "express";
import { authUser } from "../middlewares/authUser.js";
import { createBrand, deletebrand, fetchbrandDetails, findAllbrands, updateBrand } from "../controllers/brandControllers.js";
import { upload } from "../middlewares/multer.js";
const router = e.Router();



// router.get("/all-brands", findAllbrands);
// router.get("/carDetails/:id", fetchbrandsDetails);
// router.post("/create",  upload.single('image'), createCar);
// router.put("/update",upload.single('image'), updateCar);
// router.delete("/delete",deletecar);

router.get("/all-brands", authUser, findAllbrands);
router.get("/brandDetails/:id", authUser, fetchbrandDetails);
router.post("/create", authUser, upload.single('image'), createBrand);
router.put("/update",authUser,upload.single('image'), updateBrand);
router.delete("/delete",authUser,deletebrand);

export { router as brandRouter };
