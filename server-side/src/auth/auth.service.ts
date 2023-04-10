import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from './user.model';
import { ModelType } from '@typegoose/typegoose/lib/types';

@Injectable()
export class AuthService {
	constructor(@InjectModel(UserModel) private readonly authModel: ModelType<UserModel>) {}

	async createUser() {}

	async findUser() {}
}
