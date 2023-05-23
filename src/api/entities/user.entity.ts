import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Address } from './address.entity';
import { Planet } from './planet.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ name: 'birth_date' })
  birthDate?: Date;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Address, address => address.user)
  addresses: Address[];

  @ManyToOne(() => Planet, planet => planet.users)
  planet: Planet;
}
