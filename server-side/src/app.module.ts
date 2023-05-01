import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from './configs/mongo.config';
import { EmailModule } from './email/email.module';
import { CollectionModule } from './collection/collection.module';
import { PaymentModule } from './payment/payment.module';
import { ShoppingcartModule } from './shoppingcart/shoppingcart.module';

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
		ReviewModule,
		EmailModule,
		CollectionModule,
		PaymentModule,
		ShoppingcartModule,
	],
})
export class AppModule {}
