// src/admin/admin.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import * as bcrypt from 'bcryptjs';
import { CreateAdminDto } from './dto/create-admin.dto';  // Assuming DTO is used
import { AdminLoginDto } from './dto/admin-login.dto'; // Login DTO

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
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
  
  async validateAdmin(email: string, password: string): Promise<Admin> {
    const admin = await this.adminRepository.findOne({ where: { email } });

    if (!admin) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return admin;
  }

  // Login method that returns a success message if the credentials are valid
  async login(adminLoginDto: AdminLoginDto) {
    const { email, password } = adminLoginDto;

    // Validate the admin credentials
    const admin = await this.validateAdmin(email, password);

    // You can also return a simple success message here
    return {
      message: 'Login successful',
      adminId: admin.id,
      adminEmail: admin.email,
    };
  }
}
