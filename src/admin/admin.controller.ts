import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { AdminLoginDto } from './dto/admin-login.dto';
import { Admin } from './admin.entity';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('login')  // Admin login
  async login(@Body() adminLoginDto: AdminLoginDto) {
    return this.adminService.login(adminLoginDto);
  }

  @Post()  // Admin create
  async create(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminService.create(createAdminDto);
  }

  @Get()  // Get all admins
  async findAll(): Promise<Admin[]> {
    return this.adminService.findAll();
  }

  @Get(':id')  // Get admin by ID
  async findOne(@Param('id') id: number): Promise<Admin> {
    return this.adminService.findOne(id);
  }

  @Put(':id')  // Update admin profile
  async update(@Param('id') id: number, @Body() updateAdminDto: Partial<CreateAdminDto>) {
    return this.adminService.update(id, updateAdminDto);
  }

  @Delete(':id')  // Delete admin
  async remove(@Param('id') id: number) {
    return this.adminService.remove(id);
  }
}
