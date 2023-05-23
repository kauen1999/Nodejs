import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Planet } from './planet.entity';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @ManyToOne(() => User, user => user.addresses)
  user: User;

  @ManyToOne(() => Planet, planet => planet.addresses)
  planet: Planet;
}
