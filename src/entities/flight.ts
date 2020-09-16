import {
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  getRepository,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
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
    type: "text",
  })
  carrier: string;

  @Column({
    array: true,
    type: "int",
    nullable: true,
  })
  updateIds: number[];

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];

  @ManyToMany(() => Trips)
  @JoinTable()
  trips: Trips[];

  @OneToMany(() => FlightUpdates, (flightUpdate) => flightUpdate.flight)
  updates: FlightUpdates[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeUpdate()
  async updateUpdatedData() {
    const flightId = this.id;
    console.log(flightId);
  }
}

export default Flight;
