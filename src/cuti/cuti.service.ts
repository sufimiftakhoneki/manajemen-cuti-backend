import { Injectable } from '@nestjs/common';
import { Cuti } from './cuti.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CutiService {
  constructor(
    @InjectRepository(Cuti)
    private cutiRepository: Repository<Cuti>,
  ) {}

  async create(cuti: Cuti): Promise<Cuti> {
    return this.cutiRepository.save(cuti);
  }

  async findAll(): Promise<Cuti[]> {
    return this.cutiRepository.find();
  }

  async findByPegawai(pegawaiId: number): Promise<Cuti[]> {
    return this.cutiRepository.find({ where: { pegawai: { id: pegawaiId } } });
  }

  async remove(id: number): Promise<void> {
    await this.cutiRepository.delete(id);
  }
}
