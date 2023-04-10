import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('auth')
	async login(@Body() authDto: AuthDto) {
		return;
	}

	@HttpCode(200)
	@Post('register')
	async register(@Body() authDto: AuthDto) {
		return;
	}
}
