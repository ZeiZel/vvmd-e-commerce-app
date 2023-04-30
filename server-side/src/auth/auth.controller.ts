import {
	BadRequestException,
	Body,
	Controller, Header,
	HttpCode, HttpStatus,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { USER_ALREADY_EXISTED } from './auth.constants';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UsePipes(new ValidationPipe())
	@Post('register')
	@HttpCode(HttpStatus.CREATED)
	@Header("Content-Type", "application/json")
	async register(@Body() dto: AuthDto) {
		const oldUser = await this.authService.findUser(dto.login);

		if (oldUser) {
			throw new BadRequestException(USER_ALREADY_EXISTED);
		}

		return this.authService.createUser(dto);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login')
	async login(@Body() { login, password }: Omit<AuthDto, 'username'>) {
		const { email } = await this.authService.validateUser(login, password);

		return this.authService.login(email);
	}
}
