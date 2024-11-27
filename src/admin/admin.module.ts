import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin.entity';
import { JwtModule } from '@nestjs/jwt';  // Pastikan ini diimpor

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin]),  // Mengimpor repository Admin
    JwtModule,  // Tambahkan JwtModule di sini
  ],
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
