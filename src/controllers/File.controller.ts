import { Request, Response } from "express";
import { IFileService } from "../services/File.service";
import IAmenity from "../interfaces/Amenity.interface";
import IReservation from "../interfaces/Reservation.interface";

/* 
	This union type inclydes a list of the possible interfaces that could be returned while working wiht files.
	For example: 
		We need to convert file data to csv. File data will be transformed to JSON object(s) and what type will it have?
		It will have one of the types that described in type below.
*/
type DynamicFileDataInterface = IAmenity | IReservation;

export default class FileController {
	#FileService: IFileService;

	constructor(fileService: IFileService) {
		this.#FileService = fileService;
	}

	async convertFileToCSV(req: Request, res: Response) {
		if (!req.file) {
			return res.status(400).json({ error: "No file uploaded" });
		}

		const jsonedFile = await this.#FileService.convertFileToJson<DynamicFileDataInterface>(req.file);
		return res.json(jsonedFile);
	};
}
