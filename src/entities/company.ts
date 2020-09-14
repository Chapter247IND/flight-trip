import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";

import User from "./user";

@Entity({ name: "companies" })
class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 150,
    type: "varchar",
  })
  name: string;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];

  @OneToOne(() => User)
  @JoinColumn()
  administrator: User;
}

export default Company;
