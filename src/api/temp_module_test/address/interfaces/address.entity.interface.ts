import { User } from '../../user/entities';
import { Country } from '../entities';
import { IAuditEntity } from '../../../common/db/customBaseEntites/interfaces';

export interface IAddress extends IAuditEntity {
  user: User;
  country: Country;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postalCode: string;
  longitude: string;
  latitude: string;
  is_active: boolean;
}
