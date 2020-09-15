import dbConnection from "@server/utills/db.connection";
import { getRepository, getConnection } from "typeorm";
import { Users, Trips, FlightUpdates, Flights } from "@server/entities";
import faker from "faker";
export default async () => {
  await dbConnection;
  console.log(`In trip insertion`);
  const connection = getConnection();
  const trips = [];
  for (let i = 0; i < 50; i++) {
    trips.push({
      startdate: new Date(),
      endDate: new Date(),
      flightName: faker.name.findName(),
      carrier: faker.lorem.text(),
      users: await getRepository(Users)
        .createQueryBuilder()
        .orderBy("RANDOM()")
        .limit(Math.floor(Math.random() * 6) + 1)
        .getMany(),
      flights: await getRepository(Flights)
        .createQueryBuilder()
        .orderBy("RANDOM()")
        .limit(Math.floor(Math.random() * 6) + 1)
        .getMany(),
    });
  }
  await connection
    .createQueryBuilder()
    .insert()
    .into(Trips)
    .values(trips)
    .execute();
  console.log(`50 new fake trips records inserted successfully!`);
};
