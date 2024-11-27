<<<<<<< HEAD
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
  nama_depan: string;

  @IsString()
  @IsNotEmpty()
  nama_belakang: string;
=======
export class CreateAdminDto {
  namaDepan: string;
  namaBelakang: string;
  email: string;
  tanggalLahir: string;
  jenisKelamin: string;
  password: string;
>>>>>>> 57f3f19476b1b4c8248fd93c449eb65202f5fef5
}
