import {
	BadRequestException,
	Body,
	Controller,
	Header,
	HttpCode,
	HttpStatus,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { USER_ALREADY_EXISTED } from './auth.constants';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import {
	LoginUserRequest,
	LoginUserResponse,
	RegisterUserRequest,
	RegisterUserResponse,
} from './types';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@ApiBody({ type: RegisterUserRequest })
	@ApiOkResponse({ type: RegisterUserResponse })
	@UsePipes(new ValidationPipe())
	@Post('register')
	@HttpCode(HttpStatus.CREATED)
	@Header('Content-Type', 'application/json')
	async register(@Body() dto: AuthDto) {
		const oldUser = await this.authService.findUser(dto.login);

		if (oldUser) {
			throw new BadRequestException(USER_ALREADY_EXISTED);
		}

		return this.authService.createUser(dto);
	}

	@ApiBody({ type: LoginUserRequest }) // запрос, который приходит с фронта
	@ApiOkResponse({ type: LoginUserResponse }) // ответ, который уходит на фронт
	@UsePipes(new ValidationPipe()) // валидация данных полей по class-validator
	@HttpCode(200) // статус-код, который полетит на фронт
	@Post('login') // роут
	async login(@Body() { login, password }: Omit<AuthDto, 'username'>) {
		const { email } = await this.authService.validateUser(login, password);

		return this.authService.login(email);
	}
}
