import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Flight from "./flight";

@Entity({ name: "flight_updates" })
class FlightUpdate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  message: string;

  @ManyToOne(() => Flight)
  flight: Flight;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}

export default FlightUpdate;
