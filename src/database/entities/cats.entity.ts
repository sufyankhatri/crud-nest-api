import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cats {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;
}
