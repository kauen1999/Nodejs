import { Controller, Get } from '@nestjs/common';
import { AddressService } from '../services/address.service';

@Controller('v1/addresses')
export class AddressController {
  constructor(private readonly service: AddressService) {}

  @Get()
  async findAll() {
    return await this.service.findAll();
  }
}
