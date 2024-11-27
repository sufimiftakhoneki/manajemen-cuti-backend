import { Module } from '@nestjs/common';
import { CutiService } from './cuti.service';
import { CutiController } from './cuti.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuti } from './cuti.entity';
import { PegawaiModule } from '../pegawai/pegawai.module';  // Impor PegawaiModule

@Module({
  imports: [TypeOrmModule.forFeature([Cuti]), PegawaiModule],  // Masukkan PegawaiModule ke dalam imports
  controllers: [CutiController],
  providers: [CutiService],
})
export class CutiModule {}
