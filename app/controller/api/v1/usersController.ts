import { Request, Response } from "express";
const User = require("../../../services/userService");

const handleUserNotFound = (res: Response) => {
    return res.status(404).json({
        message: "User not found"
    });
}

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

            if (!users) {
                return handleUserNotFound(res);
            }

            return res.status(200).json({
                message: "Success",
                users
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    // async getUserByEmail(req: Request, res: Response) {
    //     try {
    //         const users = await User.findByEmail(req.body.email);
    //         return res.status(200).json(users);
    //     } catch (err) {
    //         return res.status(500).json(err);
    //     }
    // },

    async createUser(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const user = await User.findByEmail(req.body.email);
        const getEmail = req.body.email;
        const getPassword = req.body.password;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if (user !== undefined) {
            if (user.email === getEmail) {
                return res.status(400).json({
                    message: "Email already exists"
                });
            }
        }

        if (getPassword.length < 8) {
            return res.status(400).json({
                message: "Password must be at least 8 characters long"
            });
        }

        try {
            const users = await User.createUser(req.body);
            return res.status(200).json(users);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async updateUser(req: Request, res: Response) {
        try {
            const users = await User.updateUser(req.params.id, req.body);

            if(!users) {
                handleUserNotFound(res)
            }

            return res.status(200).json(users);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async deleteUser(req: Request, res: Response) {
        try {
            const users = await User.deleteUser(req.params.id);

            if(!users) {
                return handleUserNotFound(res);
            }

            return res.status(200).json({
                message: "Success"
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}
