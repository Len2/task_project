import { Module } from '@nestjs/common';
import { CustomRepositoryModule } from '../../common/db/customBaseRepository';
import { AddressRepository, CountryRepository } from './repositories';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';

@Module({
  imports: [
    CustomRepositoryModule.forCustomRepository([
      CountryRepository,
      AddressRepository,
    ]),
  ],
  providers: [AddressService],
  controllers: [AddressController],
})
export class AddressModule {}
