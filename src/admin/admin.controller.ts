// src/admin/admin.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';  // Assuming DTO is used
import { Admin } from './admin.entity';
import { AdminLoginDto } from './dto/admin-login.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // Create a new admin
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);  // Call the create method from service
  }

  // Get all admins
  @Get()
  findAll() {
    return this.adminService.findAll();  // Call the findAll method from service
  }

  // Get an admin by ID
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.adminService.findOne(id);  // Call the findOne method from service
  }

  // Update an admin by ID
  @Put(':id')
  update(@Param('id') id: number, @Body() updateAdminDto: Partial<CreateAdminDto>) {
    return this.adminService.update(id, updateAdminDto);  // Call the update method from service
  }

  // Delete an admin by ID
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.adminService.remove(id);  // Call the remove method from service
  }
  
  @Post('login')
  async login(@Body() adminLoginDto: AdminLoginDto) {
    const { email, password } = adminLoginDto;
    try {
      const response = await this.adminService.login(email, password);
      return response; // Kembalikan pesan login sukses atau data lain yang relevan
    } catch (error) {
      throw new Error(error.message); // Jika gagal, lemparkan error
    }
  }
}


