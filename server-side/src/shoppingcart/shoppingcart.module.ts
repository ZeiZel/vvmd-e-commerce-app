import { Module } from '@nestjs/common';
import { ShoppingcartService } from './shoppingcart.service';
import { ShoppingcartController } from './shoppingcart.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { ShoppingCartModel } from './shoppingcart.model';
import { ProductModule } from '../product/product.module';
import { AuthModule } from '../auth/auth.module';

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: ShoppingCartModel,
				schemaOptions: {
					collection: 'ShoppingCart',
				},
			},
		]),
		ProductModule,
		AuthModule,
	],
	providers: [ShoppingcartService],
	controllers: [ShoppingcartController],
	exports: [ShoppingcartService],
})
export class ShoppingcartModule {}
