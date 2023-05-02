import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from './configs/mongo.config';
import { EmailModule } from './email/email.module';
import { CollectionModule } from './collection/collection.module';
import { PaymentModule } from './payment/payment.module';
import { ShoppingcartModule } from './shoppingcart/shoppingcart.module';
import { FilesModule } from './files/files.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig,
		}),
		AuthModule,
		ProductModule,
		EmailModule,
		CollectionModule,
		PaymentModule,
		ShoppingcartModule,
		FilesModule,
	],
})
export class AppModule {}
