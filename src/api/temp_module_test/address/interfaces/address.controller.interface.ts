import { Country } from '../entities';

export interface IAddressController {
  getCountries(): Promise<Country[]>;
}
