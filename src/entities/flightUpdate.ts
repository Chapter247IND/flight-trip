import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Flight from "./flight";

@Entity({ name: "flightUpdates" })
class FlightUpdate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @CreateDateColumn()
  created: Date;

  @ManyToOne(() => Flight, { nullable: true })
  flight: Flight;
}

export default FlightUpdate;
