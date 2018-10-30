import {BaseEntity, Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export default class User extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  fullName: string
}