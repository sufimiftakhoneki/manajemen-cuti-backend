<<<<<<< HEAD
// src/admin/admin.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';  // Assuming DTO is used
import { Admin } from './admin.entity';
import { AdminLoginDto } from './dto/admin-login.dto';
=======
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminLoginDto } from './dto/admin-login.dto'; // Pastikan DTO ada
import { Admin } from './admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
>>>>>>> 57f3f19476b1b4c8248fd93c449eb65202f5fef5

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

<<<<<<< HEAD
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
  
=======
>>>>>>> 57f3f19476b1b4c8248fd93c449eb65202f5fef5
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
<<<<<<< HEAD
}


=======
  
  @Post()
  async create(@Body() createAdminDto: CreateAdminDto) {
    const admin = new Admin();
    Object.assign(admin, createAdminDto);
    return this.adminService.create(admin);
  }

  @Get()
  async findAll(): Promise<Admin[]> {
    return this.adminService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Admin> {
    return this.adminService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateAdminDto: Partial<Admin>) {
    return this.adminService.update(id, updateAdminDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.adminService.remove(id);
  }
  
  @Get()  // This handles GET requests to /admin
  async getAdminInfo() {
    return this.adminService.findAll(); // Or any other logic
  }
  
  @Get()
  async getAllAdmins() {
    return this.adminService.findAll();
  }
  
}

>>>>>>> 57f3f19476b1b4c8248fd93c449eb65202f5fef5
