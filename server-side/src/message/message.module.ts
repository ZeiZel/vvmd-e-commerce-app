import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { TelegramModule } from '../telegram/telegram.module';

@Module({
	imports: [TelegramModule],
	providers: [MessageService],
	controllers: [MessageController],
})
export class MessageModule {}
