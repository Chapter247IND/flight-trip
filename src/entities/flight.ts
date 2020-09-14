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
import FlightUpdates from "./flightUpdate";
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
  //@JoinTable()
  users: User[];

  @ManyToMany(() => Trips)
  //@JoinTable()
  trips: Trips[];

  @ManyToMany(() => FlightUpdates)
 // @JoinTable()
  updates: FlightUpdates[]; 
}

export default Flight;
