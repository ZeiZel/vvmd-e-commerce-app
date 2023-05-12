import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { FormMessageDto } from './dto/form-message.dto';

@Controller('message')
export class MessageController {
	constructor(private readonly messageService: MessageService) {}

	@Post()
	@HttpCode(HttpStatus.OK)
	async notify(@Body() dto: FormMessageDto) {
		return this.messageService.sendMessage(dto);
	}
}
