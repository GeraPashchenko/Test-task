import multer, { Multer } from 'multer';
import { FileType } from '../enums/FileType.enum';

const upload: Multer = multer({
	fileFilter(req, file, callback) {
		if (file.mimetype === FileType.CSV) {
			callback(null, true);
		}
		else {
			callback(null, false);
		}
	}
})

export default upload;
