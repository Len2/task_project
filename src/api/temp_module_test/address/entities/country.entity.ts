import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ICountry } from '../interfaces';

@Entity('countries')
export class Country implements ICountry {
  @PrimaryColumn({ type: 'integer' })
  id: number;

  @Column()
  country: string;

  @Column({ nullable: true })
  timezone: string;
}
