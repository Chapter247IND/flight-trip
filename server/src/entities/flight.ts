import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

import User from "./user";
import Trips from "./trip";

@Entity({ name: "flights" })
class Flight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 150,
    type: "varchar",
  })
  flightName: string;

  @Column({
    length: 150,
    type: "varchar",
  })
  carrier: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];

  @ManyToMany(() => User)
  @JoinTable()
  trips: Trips[];

  @ManyToMany(() => User)
  @JoinTable()
  updates: Trips[];
}

export default Flight;
