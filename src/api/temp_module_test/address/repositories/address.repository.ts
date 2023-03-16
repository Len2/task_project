import { InternalServerErrorException } from '@nestjs/common';
import { Address } from '../entities';
import { BaseCustomRepository } from '../../../common/db/customBaseRepository';
import { IAddressRepository } from '../interfaces';
import { TAddressData } from '../types';
import { CustomRepository } from '../../../common/decorators';

@CustomRepository(Address)
export class AddressRepository
  extends BaseCustomRepository<Address>
  implements IAddressRepository
{
  private async saveAddress(
    key: string,
    value: number,
    data: TAddressData,
  ): Promise<void> {
    const address = await this.create({ [key]: value, ...data });
    await this.save(address);
  }

  async saveUserAddress(userId: number, data: TAddressData): Promise<void> {
    this.saveAddress('user', userId, data).catch(() => {
      throw new InternalServerErrorException(
        'User address could not be saved!',
      );
    });
  }

  // async savePatientAddress(patientId: number, data: object) {}

  // async saveClientAddress(clientId: number, data: object) {}
}
