import { Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';
import { FileElementResponse } from './dto/file-element.response';
import * as sharp from 'sharp';

@Injectable()
export class FilesService {
	async saveFiles(files: Express.Multer.File[]): Promise<FileElementResponse[]> {
		const dateFolder = format(new Date(), 'yyyy-MM-dd');

		const uploadFolder = `${path}/uploads/${dateFolder}`;

		await ensureDir(uploadFolder);

		const res: FileElementResponse[] = [];

		for (const file of files) {
			await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);

			res.push({
				name: file.originalname,
				path: `/uploads/${dateFolder}/${file.originalname}`,
			});
		}

		return res;
	}

	async convertToWebP(file: Buffer): Promise<Buffer> {
		return sharp(file).webp().toBuffer();
	}
}
