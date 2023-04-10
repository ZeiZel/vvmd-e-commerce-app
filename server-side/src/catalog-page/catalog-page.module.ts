import { Module } from '@nestjs/common';
import { CatalogPageService } from './catalog-page.service';
import { CatalogPageController } from './catalog-page.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { CatalogPageModel } from './catalog-page.model';

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: CatalogPageModel,
				schemaOptions: {
					collection: 'CatalogPage',
				},
			},
		]),
	],
	providers: [CatalogPageService],
	controllers: [CatalogPageController],
})
export class CatalogPageModule {}
