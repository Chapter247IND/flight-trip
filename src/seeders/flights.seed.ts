import dbConnection from "@server/utills/db.connection";
import { getRepository, getConnection } from "typeorm";
import { Users, Trips, FlightUpdates, Flights } from "@server/entities";
import faker from "faker";

export default async () => {
  await dbConnection;
  console.log(`In flight insertion`);

  for (let i = 0; i < 5; i++) {
    const flightRepo = getRepository(Flights);
    const flightDetails = flightRepo.create({
      flightName: faker.name.findName(),
      carrier: faker.lorem.text(),
      trips: await getRepository(Trips)
        .createQueryBuilder()
        .orderBy("RANDOM()")
        .limit(Math.floor(Math.random() * 6) + 1)
        .getMany(),
    });
    await flightRepo.save(flightDetails);
  }

  console.log(`fake flight records inserted successfully!`);
};
