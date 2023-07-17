import * as express from "express";
import upload from "../config/multer-upload";
import { fileController } from "../controllers/File.controller";
import { authMiddleware } from "../middlewares/Auth.middleware";

const router = express.Router();

router.post('/upload', [authMiddleware, upload.single('file')], fileController.convertFileToCSV.bind(fileController));

export default router;
