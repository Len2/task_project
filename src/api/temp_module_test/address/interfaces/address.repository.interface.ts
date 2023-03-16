import { ICustomBaseRepository } from '../../../common/db/customBaseRepository/interfaces';
import { Address } from '../entities';
import { TAddressData } from '../types';

export interface IAddressRepository extends ICustomBaseRepository<Address> {
  saveUserAddress(userId: number, data: TAddressData): Promise<void>;
}
