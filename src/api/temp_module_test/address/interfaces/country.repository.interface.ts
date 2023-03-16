import { Country } from '../entities';

export interface ICountryRepository {
  getCountries(): Promise<Country[]>;
  getCountry(countryId: number): Promise<Country>;
}
