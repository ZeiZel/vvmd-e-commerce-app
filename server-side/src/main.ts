import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.setGlobalPrefix('api');

	const configSwagger = new DocumentBuilder()
		.setTitle('ООО "Волго-Вятский Монетный Двор"')
		.setDescription('api documentation')
		.setVersion('0.0.1')
		.addTag('api')
		.build();
	const documentSwagger = SwaggerModule.createDocument(app, configSwagger);
	SwaggerModule.setup('swagger', app, documentSwagger);

	app.enableCors();

	await app.listen(3000);
}

bootstrap();
