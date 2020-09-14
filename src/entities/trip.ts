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
import Flights from "./flight";

@Entity({ name: "trips" })
class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startdate: Date;

  @Column()
  endDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];

  @ManyToMany(() => User)
  @JoinTable()
  flights: Flights[];
}

export default Trip;
