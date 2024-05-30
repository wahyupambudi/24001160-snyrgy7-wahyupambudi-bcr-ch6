import { Router } from "express";
import usersController from "../controller/api/v1/usersController";
import { UsersModel } from "../models/UsersModel";

const router = Router();

router.get("/", usersController.getUsers);
router.get("/email", usersController.getUserByEmail);
router.get("/:id", usersController.getUserById);
router.post("/create", usersController.createUser);
router.put("/update/:id", usersController.updateUser);
router.delete("/delete/:id", usersController.deleteUser);

export default router;