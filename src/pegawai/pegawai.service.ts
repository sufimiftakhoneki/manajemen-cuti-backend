import { Injectable } from '@nestjs/common';
import { Pegawai } from './pegawai.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PegawaiService {
  constructor(
    @InjectRepository(Pegawai)
    private pegawaiRepository: Repository<Pegawai>,
  ) {}

  async create(pegawai: Pegawai): Promise<Pegawai> {
    return this.pegawaiRepository.save(pegawai);
  }

  async findAll(): Promise<Pegawai[]> {
    return this.pegawaiRepository.find();
  }

  async findOne(id: number): Promise<Pegawai> {
	  return this.pegawaiRepository.findOne({ where: { id } }); 
	}


  async update(id: number, pegawai: Partial<Pegawai>): Promise<Pegawai> {
    await this.pegawaiRepository.update(id, pegawai);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.pegawaiRepository.delete(id);
  }
}
