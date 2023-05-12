import { Controller, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { HttpCode } from '@nestjs/common/decorators';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileElementResponse } from './dto/file-element.response';
import { FilesService } from './files.service';
import { MFile } from './mfile.class';

@Controller('files')
export class FilesController {
	constructor(private readonly filesService: FilesService) {}

	@Post('upload/:id')
	@HttpCode(200)
	@UseGuards(JwtAuthGuard)
	@UseInterceptors(FileInterceptor('files'))
	async uploadFiles(
		@Param('id') id: string,
		@UploadedFile() file: Express.Multer.File,
	): Promise<FileElementResponse[]> {
		const saveArray: MFile[] = [new MFile(file)];

		if (file.mimetype.includes('image')) {
			const webp = await this.filesService.convertToWebP(file.buffer);
			saveArray.push(
				new MFile({
					originalname: `${file.originalname.split('.')[0]}.webp`,
					buffer: webp,
				}),
			);
		}

		return this.filesService.saveFiles([file]);
	}
}
