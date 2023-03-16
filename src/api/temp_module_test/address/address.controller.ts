import { Controller, Get } from '@nestjs/common';
import { AddressService } from './address.service';
import { Country } from './entities';
import { Public } from '../../common/decorators';
import { IAddressController } from './interfaces';
import { ApiTags } from '@nestjs/swagger';

@Controller('address')
@ApiTags('Address')
export class AddressController implements IAddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get('/countries')
  @Public()
  getCountries(): Promise<Country[]> {
    return this.addressService.getCountries();
  }
}
