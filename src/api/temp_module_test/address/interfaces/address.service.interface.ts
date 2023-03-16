import { Country } from '../entities';
import { TAddressData } from '../types';

export interface IAddressService {
  getCountries(): Promise<Country[]>;
  saveUserAddress(userId: number, addressData: TAddressData): Promise<void>;
}
