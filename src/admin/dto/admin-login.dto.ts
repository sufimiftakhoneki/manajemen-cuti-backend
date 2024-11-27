// src/admin/dto/admin-login.dto.ts
import { IsEmail, IsString, MinLength } from 'class-validator';

export class AdminLoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)  // Pastikan password memiliki panjang minimal 6 karakter
  password: string;
}
