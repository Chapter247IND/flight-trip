import dbConnection from "@server/utills/db.connection";
import { getRepository, getConnection } from "typeorm";
import { FlightUpdates, Flights } from "@server/entities";
import faker from "faker";
export default async () => {
  await dbConnection;
  console.log(`In flight updation insertion`);
  const connection = getConnection();
  const flightupdations = [];
  for (let i = 0; i < 50; i++) {
    flightupdations.push({
    created: new Date(),
    message: faker.lorem.text(),
    flight: await getRepository(Flights)
        .createQueryBuilder()
        .orderBy("RANDOM()")
        .limit(1)
        .getMany(),
    });
  }
  await connection
    .createQueryBuilder()
    .insert()
    .into(FlightUpdates)
    .values(flightupdations)
    .execute();
  console.log(`50 new fake flight update records inserted successfully!`);
};
