import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminLoginDto } from './dto/admin-login.dto'; // Pastikan DTO ada
import { Admin } from './admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

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

