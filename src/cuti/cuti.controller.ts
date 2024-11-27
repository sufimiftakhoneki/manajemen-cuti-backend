import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CutiService } from './cuti.service';
import { CreateCutiDto } from './dto/create-cuti.dto';
import { UpdateCutiDto } from './dto/update-cuti.dto';

@Controller('cuti')
export class CutiController {
  constructor(private readonly cutiService: CutiService) {}

  @Get()
  findAll() {
    return this.cutiService.findAll();
  }

  @Post()
  create(@Body() createCutiDto: CreateCutiDto) {
    return this.cutiService.create(createCutiDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCutiDto: UpdateCutiDto) {
    return this.cutiService.update(id, updateCutiDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.cutiService.delete(id);
  }
}
