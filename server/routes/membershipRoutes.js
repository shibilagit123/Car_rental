import e from "express";
import { authUser } from "../middlewares/authUser.js";
import { createmembership, deletemembership, fetchmembershipDetails, findAllmemberships, updatemembership } from "../controllers/membershipControllers.js";
import { upload } from "../middlewares/multer.js";
const router = e.Router();



// router.get("/all-membeships", findAllbrands);
// router.get("/carDetails/:id", fetchbrandsDetails);
// router.post("/create",  upload.single('image'), createCar);
// router.put("/update",upload.single('image'), updateCar);
// router.delete("/delete",deletecar);

router.get("/all-membeships", authUser, findAllmemberships);
router.get("/membershipDetails/:id", authUser, fetchmembershipDetails);
router.post("/create", authUser, upload.single('image'), createmembership);
router.put("/update",authUser,upload.single('image'), updatemembership);
router.delete("/delete",authUser,deletemembership);

export { router as membershipRouter };
