import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable
} from "typeorm";

import User from "./user";

@Entity({ name:  "companies"})
class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 150,
  })
  name: string;

  @ManyToMany(() => User) @JoinTable() 
  public users: User[];
}

export default Company;