import { Router } from "express";
import carImg from "../middlewares/multer";
import carsController from "../controller/api/v1/carsController";

const router = Router();

router.get("/", carsController.getCars);
router.get("/:id", carsController.getCarsById);
router.post("/create", carImg.single('img'), carsController.createCar);
router.put("/update/:id", carImg.single('img'), carsController.updateCar);
// router.delete("/delete/:id", carsController.deleteUser);

export default router;