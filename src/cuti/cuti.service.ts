import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuti } from './cuti.entity';
import { CreateCutiDto } from './dto/create-cuti.dto';
import { UpdateCutiDto } from './dto/update-cuti.dto';
import { Pegawai } from '../pegawai/pegawai.entity'; // Pastikan path ini sesuai dengan struktur proyek


@Injectable()
export class CutiService {
  constructor(
    @InjectRepository(Cuti)
    private cutiRepository: Repository<Cuti>,
  ) {}

  async findAll(): Promise<Cuti[]> {
    return this.cutiRepository.find({ relations: ['pegawai'] });
  }

  async create(createCutiDto: CreateCutiDto): Promise<Cuti> {
    const cuti = this.cutiRepository.create(createCutiDto);
    return this.cutiRepository.save(cuti);
  }

  async update(id: number, updateCutiDto: UpdateCutiDto): Promise<Cuti> {
    await this.cutiRepository.update(id, updateCutiDto);
    return this.cutiRepository.findOne({
  where: { id }
});

  }

  async delete(id: number): Promise<void> {
    await this.cutiRepository.delete(id);
  }
}
