import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import Flight from "./flight";

@Entity({ name: "flightUpdates" })
class FlightUpdate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Flight, { nullable: true })
  @JoinColumn()
  flight: Flight;
}

export default FlightUpdate;