import { Module } from '@nestjs/common';
import { ShoppingcartService } from './shoppingcart.service';
import { ShoppingcartController } from './shoppingcart.controller';

@Module({
  providers: [ShoppingcartService],
  controllers: [ShoppingcartController]
})
export class ShoppingcartModule {}
