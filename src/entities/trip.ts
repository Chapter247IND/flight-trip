import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Flights from "./flight";
import { TripToFlight } from "./triptoflight";
import User from "./user";

@Entity({ name: "trips" })
class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];

  @OneToMany((type) => TripToFlight, (tripToFlight) => tripToFlight.flight)
  tripToFlights!: TripToFlight[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Trip;
