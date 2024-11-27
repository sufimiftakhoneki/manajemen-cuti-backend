// src/cuti/cuti.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CutiService } from './cuti.service';
import { CutiController } from './cuti.controller';
import { Cuti } from './cuti.entity';
import { PegawaiModule } from '../pegawai/pegawai.module';  // Impor PegawaiModule untuk relasi Pegawai

@Module({
  imports: [
    TypeOrmModule.forFeature([Cuti]),  // Menambahkan entitas Cuti ke module
    PegawaiModule,  // Mengimpor PegawaiModule untuk akses Pegawai
  ],
  providers: [CutiService],
  controllers: [CutiController],
})
export class CutiModule {}
