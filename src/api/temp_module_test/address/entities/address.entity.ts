import { Column, Entity, ManyToOne } from 'typeorm';
import { IAddress } from '../interfaces';
import { User } from '../../user/entities';
import { AuditEntity } from '../../../common/db/customBaseEntites';
import { Country } from './';

@Entity('addresses')
export class Address extends AuditEntity implements IAddress {
  @ManyToOne(() => User, (user: User) => user.id, { nullable: true })
  user: User;

  @ManyToOne(() => Country, (country: Country) => country.id)
  country: Country;

  // TO DO: implement relationship with patient entity
  // patient: Patient;

  // TO DO: implement relationship with client entity
  // client: Client;
  @Column()
  addressLine1: string;

  @Column()
  addressLine2: string;

  @Column()
  city: string;

  @Column()
  postalCode: string;

  @Column()
  longitude: string;

  @Column()
  latitude: string;

  @Column({ default: true })
  is_active: boolean;
}
