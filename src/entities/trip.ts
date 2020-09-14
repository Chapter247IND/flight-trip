import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Flights from "./flight";
import User from "./user";

@Entity({ name: "trips" })
class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startdate: Date;

  @Column()
  endDate: Date;

  @ManyToMany(() => User)
  users: User[];

  @ManyToMany(() => Flights)
  flights: Flights[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Trip;
