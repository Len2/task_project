import { BadRequestException, Injectable } from '@nestjs/common';
import { TAddressData } from './types';
import { AddressRepository, CountryRepository } from './repositories';
import { Country } from './entities';
import { IAddressService } from './interfaces';

@Injectable()
export class AddressService implements IAddressService {
  constructor(
    private readonly countryRepository: CountryRepository,
    private readonly addressRepository: AddressRepository,
  ) {}

  getCountries(): Promise<Country[]> {
    return this.countryRepository.getCountries();
  }

  saveUserAddress(userId: number, addressData: TAddressData): Promise<void> {
    const countryExists = this.countryRepository.getCountry(addressData.id);
    if (!countryExists) throw new BadRequestException('Country not found');
    return this.addressRepository.saveUserAddress(userId, addressData);
  }
}
