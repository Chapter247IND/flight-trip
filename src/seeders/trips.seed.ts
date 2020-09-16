import { Flights, Trips, Users } from "@server/entities";
import Trip from "@server/entities/trip";
import User from "@server/entities/user";
import dbConnection from "@server/utills/db.connection";
import faker from "faker";
import { getConnection, getRepository } from "typeorm";

export default async () => {
  await dbConnection;
  console.log(`In trip insertion`);
  const connection = getConnection();
  const trips = [];
  for (let i = 0; i < 5; i++) {
    const tripRepo = getRepository(Trip);
    const startDate = faker.date.future();
    const trip = tripRepo.create({
      startDate,
      endDate: faker.date.between(startDate, faker.date.future()),
      users: await getRepository(Users)
        .createQueryBuilder()
        .orderBy("RANDOM()")
        .limit(Math.floor(Math.random() * 6) + 1)
        .getMany(),
    });
    await tripRepo.save(trip);
  }
  console.log(`fake trips records inserted successfully!`);
};
