// src/admin/dto/create-admin.dto.ts
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateAdminDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  namaDepan: string;

  @IsString()
  @IsNotEmpty()
  namaBelakang: string;
}
