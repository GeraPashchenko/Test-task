import express from "express";
import { userController } from "../controllers/User.controller";

const router = express.Router();

router.post('/sign-up', userController.handleSignUp.bind(userController));

export default router;
