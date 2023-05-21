import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  //create app
  const app = await NestFactory.create(AppModule);
  // create swagger documentation
  const config = new DocumentBuilder()
    .setTitle('ohs-voting API')
    .setDescription('Description of the ohs-voting API')
    .setVersion('1.0')
    .addTag('OHS-voting')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const globalPrefix = 'api';
  // enable cors
  app.enableCors();
  // set global prefix and port
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
