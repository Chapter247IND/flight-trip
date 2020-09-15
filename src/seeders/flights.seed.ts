import dbConnection from "@server/utills/db.connection";
import { getRepository, getConnection } from "typeorm";
import { Users, Trips, FlightUpdates, Flights } from "@server/entities";
import faker from "faker";
export default async () => {
  await dbConnection;
  console.log(`In flight insertion`);
  const connection = getConnection();
  const flights = [];
  for (let i = 0; i < 50; i++) {
    flights.push({
      flightName: faker.name.findName(),
      carrier: faker.lorem.text(),
      users: await getRepository(Users)
        .createQueryBuilder()
        .orderBy("RANDOM()")
        .limit(Math.floor(Math.random() * 6) + 1)
        .getMany(),
      trips: await getRepository(Trips)
        .createQueryBuilder()
        .orderBy("RANDOM()")
        .limit(Math.floor(Math.random() * 6) + 1)
        .getMany(),
      updates: await getRepository(FlightUpdates)
        .createQueryBuilder()
        .orderBy("RANDOM()")
        .limit(Math.floor(Math.random() * 6) + 1)
        .getMany(),
    });
  }
  await connection
    .createQueryBuilder()
    .insert()
    .into(Flights)
    .values(flights)
    .execute();
  console.log(`50 new fake flight records inserted successfully!`);
};
