import csvtojson from 'csvtojson';
import IFile from '../interfaces/File.interface';
import { FileType } from '../enums/FileType.enum';

export interface IFileService {
	convertFileToJson<T>(file: IFile): Promise<T[] | T>;
}

export class FileService implements IFileService {

	constructor() { }

	private formatFileBufferToFileString(fileBuffer: Buffer): string {
		return fileBuffer.toString();
	}

	private async formatCSVFileStringToJSON<T>(fileString: string): Promise<T[] | T> {
		const jsonedFileString = await csvtojson({ delimiter: ';' }).fromString(fileString);
		return jsonedFileString;
	}

	private async convertCSVtoJSON<T>(fileBuffer: Buffer): Promise<T[] | T> {
		const fileString = this.formatFileBufferToFileString(fileBuffer);
		const convertedFileString = await this.formatCSVFileStringToJSON<T>(fileString);

		return convertedFileString as T[] | T;
	}

	async convertFileToJson<T>(file: IFile): Promise<T[] | T> {
		switch (file.mimetype) {
			case FileType.CSV:
				return await this.convertCSVtoJSON<T>(file.buffer);

			default:
				return [];
		}
	}
}

export const fileService = Object.freeze(new FileService());
