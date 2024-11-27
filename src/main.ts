import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Mengaktifkan validasi global
  app.useGlobalPipes(new ValidationPipe());

  // Mengaktifkan CORS untuk memungkinkan permintaan dari frontend (http://localhost:3000)
  app.enableCors({
<<<<<<< HEAD
    origin: 'http://localhost:*',  // Pastikan untuk mengganti dengan domain frontend Anda
=======
    origin: 'http://localhost:3000',  // Pastikan untuk mengganti dengan domain frontend Anda
>>>>>>> 57f3f19476b1b4c8248fd93c449eb65202f5fef5
    methods: 'GET,POST,PUT,DELETE,UPDATE,PATCH',
    allowedHeaders: 'Content-Type, Accept, Authorization', // Sesuaikan dengan header yang Anda perlukan
  });

  // Menjalankan aplikasi pada port 3001
  await app.listen(3001);
}
bootstrap();
