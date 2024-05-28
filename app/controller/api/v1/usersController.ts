import { Request, Response } from "express";
const User = require("../../../services/userService");

export default {
    async getUsers(req: Request, res: Response) {
        try {
            const users = await User.findAll();
            return res.status(200).json({
                message: "Success",
                users
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async getUserById(req: Request, res: Response) {
        try {
            const users = await User.findById(req.params.id);
            return res.status(200).json(users);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async getUserByEmail(req: Request, res: Response) {
        try {
            const users = await User.findByEmail(req.params.email);
            return res.status(200).json(users);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}