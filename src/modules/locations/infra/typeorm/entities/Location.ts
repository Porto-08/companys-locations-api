import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ILocation } from '../../../domain/models/ILocation';
import { Company } from '../../../../companys/infra/typeorm/entities/Company';

@Entity('locations')
export class Location implements ILocation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cep: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Company, (company) => company.locations, {
    onDelete: 'CASCADE',
  })
  company: Company;
}
