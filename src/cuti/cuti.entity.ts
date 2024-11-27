import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pegawai } from '../pegawai/pegawai.entity';

@Entity()
export class Cuti {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pegawai)
  @JoinColumn({ name: 'pegawai_id' })
  pegawai: Pegawai;

  @Column()
  alasanCuti: string;

  @Column()
  tanggalMulai: Date;

  @Column()
  tanggalSelesai: Date;
}
