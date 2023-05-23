import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Planet } from '../entities/planet.entity';

@Injectable()
export class PlanetService {
  constructor(
    @InjectRepository(Planet)
    private readonly planetRepository: Repository<Planet>,
  ) {}

  async findAll(): Promise<Planet[]> {
    try {
      return await this.planetRepository.find();
    } catch (error) {
      throw new Error('Failed to fetch planets.');
    }
  }
}
