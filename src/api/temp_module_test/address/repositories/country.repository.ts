import { Repository } from 'typeorm';
import { ICountryRepository } from '../interfaces';
import { CustomRepository } from '../../../common/decorators';
import { Country } from '../entities';

@CustomRepository(Country)
export class CountryRepository
  extends Repository<Country>
  implements ICountryRepository
{
  async getCountries(): Promise<Country[]> {
    return await this.find();
  }

  async getCountry(id: number): Promise<Country> {
    return await this.findOne({ where: { id } });
  }
}
