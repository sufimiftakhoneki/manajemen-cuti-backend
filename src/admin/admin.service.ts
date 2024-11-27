<<<<<<< HEAD
// src/admin/admin.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import * as bcrypt from 'bcryptjs';
import { CreateAdminDto } from './dto/create-admin.dto';  // Assuming DTO is used
=======
import { Injectable } from '@nestjs/common';
import { Admin } from './admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
>>>>>>> 57f3f19476b1b4c8248fd93c449eb65202f5fef5

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
<<<<<<< HEAD
    private readonly adminRepository: Repository<Admin>,
  ) {}

  // Create a new Admin
  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const salt = await bcrypt.genSalt();
    createAdminDto.password = await bcrypt.hash(createAdminDto.password, salt);
    const admin = this.adminRepository.create(createAdminDto); // Create a new Admin instance
    return this.adminRepository.save(admin);  // Save and return the admin
  }

  // Find all Admins
  async findAll(): Promise<Admin[]> {
    return this.adminRepository.find();  // Return all admins
  }

  // Find one Admin by ID
  async findOne(id: number): Promise<Admin> {
    return this.adminRepository.findOne({ where: { id } });  // Find one admin by ID
  }

  // Update an Admin's data
  async update(id: number, updateAdminDto: Partial<CreateAdminDto>): Promise<Admin> {
    await this.adminRepository.update(id, updateAdminDto);  // Update admin by ID
    return this.findOne(id);  // Return updated admin
  }

  // Remove an Admin by ID
  async remove(id: number): Promise<void> {
    await this.adminRepository.delete(id);  // Delete admin by ID
  }
  
=======
    private adminRepository: Repository<Admin>,
  ) {}

>>>>>>> 57f3f19476b1b4c8248fd93c449eb65202f5fef5
  async login(email: string, password: string): Promise<any> {
    const admin = await this.adminRepository.findOne({ where: { email } });
    if (!admin) throw new Error('Admin not found');

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) throw new Error('Invalid credentials');

    // Jika login berhasil, kita tidak menggunakan JWT
    return { message: 'Login successful' }; // Cukup kirimkan pesan atau data yang relevan
  }
}
<<<<<<< HEAD





=======
>>>>>>> 57f3f19476b1b4c8248fd93c449eb65202f5fef5
