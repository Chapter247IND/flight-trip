import { Flights, Trips, Users } from "@server/entities";
import Trip from "@server/entities/trip";
import { TripToFlight } from "@server/entities/triptoflight";
import User from "@server/entities/user";
import dbConnection from "@server/utills/db.connection";
import faker from "faker";
import { getConnection, getRepository } from "typeorm";

export default async () => {
  await dbConnection;
  console.log(`In trip insertion`);
  for (let i = 0; i < 5; i++) {
    const tripRepo = getRepository(Trip);
    const startDate = faker.date.future();
    const flights = await getRepository(Flights)
      .createQueryBuilder("flights")
      .orderBy("RANDOM()")
      .limit(Math.floor(Math.random() * 6))
      .leftJoinAndSelect("flights.tripToFlights", "tripToFlights")
      .leftJoinAndSelect("flights.users", "users")
      .getMany();
    let users = [];
    let tripsToFlights = [];
    for (let i = 0; i < flights.length; i++) {
      const flight = flights[i];
      users = flight.users;
      tripsToFlights = flight.tripToFlights;
    }
    const trip = tripRepo.create({
      startDate,
      endDate: faker.date.between(startDate, faker.date.future()),
      tripToFlights: tripsToFlights,
      users: users,
    });
    await tripRepo.save(trip);
  }
  console.log(`fake trips records inserted successfully!`);
};
