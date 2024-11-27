import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PegawaiService } from './pegawai.service';
import { Pegawai } from './pegawai.entity';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';

@Controller('pegawai')
export class PegawaiController {
  constructor(private readonly pegawaiService: PegawaiService) {}

  @Post()
  async create(@Body() createPegawaiDto: CreatePegawaiDto) {
    const pegawai = new Pegawai();
    Object.assign(pegawai, createPegawaiDto);
    return this.pegawaiService.create(pegawai);
  }

  @Get()
  async findAll(): Promise<Pegawai[]> {
    return this.pegawaiService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Pegawai> {
    return this.pegawaiService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatePegawaiDto: Partial<Pegawai>) {
    return this.pegawaiService.update(id, updatePegawaiDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.pegawaiService.remove(id);
  }
}
