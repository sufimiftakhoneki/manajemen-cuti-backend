import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { PegawaiModule } from './pegawai/pegawai.module';
import { CutiModule } from './cuti/cuti.module';
import { Admin } from './admin/admin.entity';
import { Pegawai } from './pegawai/pegawai.entity';
import { Cuti } from './cuti/cuti.entity';
import { JwtModule } from '@nestjs/jwt';  // Import JwtModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password123!',  // Gantilah dengan password database Anda
      database: 'cuti_pegawai_db',  // Gantilah dengan nama database Anda
      entities: [Admin, Pegawai, Cuti],
      synchronize: true,  // Tentukan apakah Anda ingin sinkronisasi otomatis
    }),
    AdminModule,
    PegawaiModule,
    CutiModule,
    JwtModule.register({
      secret: 'supersecretkey',  // Gunakan secret yang kuat dan aman
      signOptions: { expiresIn: '1h' },  // Token kedaluwarsa dalam 1 jam
    }),
  ],
})
export class AppModule {}
