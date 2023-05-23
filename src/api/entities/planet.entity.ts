import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Address } from './address.entity';

@Entity('planets')
export class Planet {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @ManyToMany(() => User, user => user.planets)
  users: User[];

  @OneToMany(() => Address, address => address.planet)
  addresses: Address[];
}
