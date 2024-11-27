import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pegawai } from '../pegawai/pegawai.entity';

@Entity()
export class Cuti {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  alasanCuti: string;

  @Column()
  tanggalMulaiCuti: Date;

  @Column()
  tanggalSelesaiCuti: Date;

  @ManyToOne(() => Pegawai, (pegawai) => pegawai.cuti)
  @JoinColumn({ name: 'pegawai_id' })
  pegawai: Pegawai;
}
