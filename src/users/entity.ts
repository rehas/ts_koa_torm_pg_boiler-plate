import {BaseEntity, Entity, Column} from 'typeorm';

@Entity()
export default class User extends BaseEntity{
  id: number

  @Column('text')
  fullName: string
}