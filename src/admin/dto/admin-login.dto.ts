// src/admin/dto/admin-login.dto.ts
<<<<<<< HEAD
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class AdminLoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
=======
import { IsEmail, IsString, MinLength } from 'class-validator';

export class AdminLoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)  // Pastikan password memiliki panjang minimal 6 karakter
>>>>>>> 57f3f19476b1b4c8248fd93c449eb65202f5fef5
  password: string;
}
