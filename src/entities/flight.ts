import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import FlightUpdate from "./flightUpdate";
import Trips from "./trip";
import User from "./user";

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
  users: User[];

  @ManyToMany(() => Trips)
  trips: Trips[];

  @ManyToMany(() => FlightUpdate)
  updates: FlightUpdate[];
}

export default Flight;
