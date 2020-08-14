import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // strip out unwanted values
    forbidNonWhitelisted: true, // throw an error if unwanted value received
    transform: true, // transform body to instance of dtos
  }));

  await app.listen(3000);
}
bootstrap();
