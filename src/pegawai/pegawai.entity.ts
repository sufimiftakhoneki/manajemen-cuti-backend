import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Cuti } from '../cuti/cuti.entity';

@Entity()
export class Pegawai extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namaDepan: string;

  @Column()
  namaBelakang: string;

  @Column()
  email: string;

  @Column()
  noHp: string;

  @Column()
  alamat: string;

  @Column()
  jenisKelamin: string;

  @OneToMany(() => Cuti, (cuti) => cuti.pegawai)
  cuti: Cuti[]; // Menambahkan relasi OneToMany
}
