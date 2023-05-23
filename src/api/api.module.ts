import { Module } from '@nestjs/common';

import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { User } from './entities/user.entity';

import { AddressController } from './controllers/adress.controller';
import { AddressService } from './services/address.service';
import { Address } from './entities/address.entity';

import { PlanetController } from './controllers/planet.controller';
import { PlanetService } from './services/planet.service';
import { Planet } from './entities/planet.entity';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User, Address, Planet])],
  controllers: [UserController, AddressController, PlanetController],
  providers: [UserService, AddressService, PlanetService],
})
export class ApiModule {}
