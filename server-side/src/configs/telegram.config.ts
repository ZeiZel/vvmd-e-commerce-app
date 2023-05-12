import { ConfigService } from '@nestjs/config';
import { ITelegramOptions } from 'src/telegram/telegram.interface';

export const getTelegramConfig = (configService: ConfigService): ITelegramOptions => {
	const token = configService.get('TELEGRAM_BOT_TOKEN');

	if (!token) {
		throw new Error('TELEGRAM_BOT_TOKEN не задан');
	}

	return {
		token,
		chatId: configService.get('TELEGRAM_CHAT_ID') ?? '-1001953374256',
	};
};
