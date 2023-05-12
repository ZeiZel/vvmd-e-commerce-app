import { Injectable } from '@nestjs/common';
import { FormMessageDto } from './dto/form-message.dto';
import { TelegramService } from '../telegram/telegram.service';

@Injectable()
export class MessageService {
	constructor(private readonly telegramService: TelegramService) {}

	async sendMessage({ name, surname, email, phoneNumber, message }: FormMessageDto) {
		const messageTelegram = `Клиент ${name} ${surname}\n С контактными данными:\n - почта ${email}\n - номер ${phoneNumber}\n Отправил сообщение: ${message}`;

		return this.telegramService.sendMessage(messageTelegram);
	}
}
