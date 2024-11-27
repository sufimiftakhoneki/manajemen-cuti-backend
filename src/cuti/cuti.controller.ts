import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CutiService } from './cuti.service';
import { Cuti } from './cuti.entity';
import { CreateCutiDto } from './dto/create-cuti.dto';

@Controller('cuti')
export class CutiController {
  constructor(private readonly cutiService: CutiService) {}

  @Post()
  async create(@Body() createCutiDto: CreateCutiDto) {
    const cuti = new Cuti();
    Object.assign(cuti, createCutiDto);
    return this.cutiService.create(cuti);
  }

  @Get()
  async findAll(): Promise<Cuti[]> {
    return this.cutiService.findAll();
  }

  @Get('pegawai/:pegawaiId')
  async findByPegawai(@Param('pegawaiId') pegawaiId: number): Promise<Cuti[]> {
    return this.cutiService.findByPegawai(pegawaiId);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.cutiService.remove(id);
  }
}
