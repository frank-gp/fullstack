import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number = uuid();

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  // createdAt: Date = new Date();
  createdAt: string;
}
