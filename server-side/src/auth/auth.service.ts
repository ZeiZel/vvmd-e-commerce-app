import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { AuthModel } from './auth.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { AuthDto } from './dto/auth.dto';
import { compare, genSaltSync, hashSync } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { USER_NOT_FOUND_ERROR, WRONG_PASSWORD_ERROR } from './auth.constants';
import { Types } from 'mongoose';

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(AuthModel) private readonly userModel: ModelType<AuthModel>,
		private readonly jatService: JwtService,
	) {}

	async createUser(dto: AuthDto) {
		const salt = genSaltSync(10);

		const newUser = await this.userModel.create({
			email: dto.login,
			username: dto.username,
			passwordHash: hashSync(dto.password, salt),
		});

		return newUser.save();
	}

	async findUser(email: string) {
		return this.userModel.findOne({ email }).exec();
	}

	async findUserById(id: Types.ObjectId) {
		return this.userModel.findOne({ _id: id }).exec();
	}

	async validateUser(email: string, password: string): Promise<Pick<AuthModel, 'email'>> {
		const user = await this.findUser(email);

		if (!user) {
			throw new UnauthorizedException(USER_NOT_FOUND_ERROR);
		}

		const isCorrectPassword = await compare(password, user.passwordHash);

		if (!isCorrectPassword) {
			throw new UnauthorizedException(WRONG_PASSWORD_ERROR);
		}

		return { email: user.email };
	}

	async login(email: string) {
		const payload = { email };
		const user = await this.findUser(email);

		if (!user) {
			throw new UnauthorizedException(USER_NOT_FOUND_ERROR);
		}

		return {
			user: {
				email: user.email,
				username: user.username,
				password: user.passwordHash,
			},
			access_token: await this.jatService.signAsync(payload),
		};
	}
}
