import * as express from "express";
import upload from "../config/multer-upload";

import FileController from "../controllers/File.controller";
import { FileService } from "../services/File.service";

const router = express.Router();
const fileService = new FileService();
const fileController = new FileController(fileService);

router.post('/upload', upload.single('file'), fileController.convertFileToCSV.bind(fileController));

export default router;
