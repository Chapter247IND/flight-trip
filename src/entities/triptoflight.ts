import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Flight from "./flight";
import Trip from "./trip";

@Entity()
export class TripToFlight {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public sequence!: number;

  @ManyToOne((type) => Flight, (flight) => flight.tripToFlights)
  public flight!: Flight;

  @ManyToOne((type) => Trip, (trip) => trip.tripToFlights)
  public trip!: Trip;
}
