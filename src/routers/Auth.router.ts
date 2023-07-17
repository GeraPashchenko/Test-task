import express from "express";
import { authController } from "../controllers/Auth.controller";

const router = express.Router();

router.post('/sign-in', authController.handleSignIn.bind(authController));

export default router;
