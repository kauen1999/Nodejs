import { Controller, Get, HttpStatus } from '@nestjs/common';
import { PlanetService } from '../services/planet.service';

@Controller('v1/planets')
export class PlanetController {
  constructor(private readonly planetService: PlanetService) {}

  @Get()
  async findAll() {
    try {
      return await this.planetService.findAll();
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }
}
