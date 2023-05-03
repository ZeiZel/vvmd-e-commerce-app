import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProductModel } from './product.model';
import { FilesModule } from '../files/files.module';

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: ProductModel,
				schemaOptions: {
					collection: 'Product',
				},
			},
		]),
		FilesModule,
	],
	controllers: [ProductController],
	providers: [ProductService],
	exports: [ProductService, ProductModule],
})
export class ProductModule {}
