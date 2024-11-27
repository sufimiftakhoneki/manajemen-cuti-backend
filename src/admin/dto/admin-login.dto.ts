// src/admin/dto/admin-login.dto.ts
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class AdminLoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
