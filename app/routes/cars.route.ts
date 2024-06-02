import { Router } from "express";
import carImg from "../middlewares/multer";
import carsController from "../controller/api/v1/carsController";
import { Authenticate, restrictCars } from "../middlewares/authentication";

const router = Router();

router.get("/", Authenticate, restrictCars, carsController.getCars);
router.get("/available", Authenticate, restrictCars, carsController.getCarsAvailable);
router.get("/deleted", Authenticate, restrictCars, carsController.getCarsDeleted);
router.get("/:id", Authenticate, restrictCars, carsController.getCarsById);
router.post("/create", Authenticate, restrictCars, carImg.single('img'), carsController.createCar);
router.put("/update/:id", Authenticate, restrictCars, carImg.single('img'), carsController.updateCar);
router.delete("/delete/:id", Authenticate, restrictCars, carsController.deleteCar);

export default router;