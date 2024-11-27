// src/pegawai/pegawai.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PegawaiService } from './pegawai.service';
import { PegawaiController } from './pegawai.controller';
import { Pegawai } from './pegawai.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pegawai])],  // Menambahkan entitas Pegawai ke module
  providers: [PegawaiService],
  controllers: [PegawaiController],
})
export class PegawaiModule {}
