import { Router } from "express";
import usersController from "../controller/api/v1/usersController";

const router = Router();

router.get("/", usersController.getUsers);

export default router;