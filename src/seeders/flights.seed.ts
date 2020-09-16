import { Flights, Users } from "@server/entities";
import { TripToFlight } from "@server/entities/triptoflight";
import dbConnection from "@server/utills/db.connection";
import faker from "faker";
import { getRepository } from "typeorm";

export default async () => {
  const connection = await dbConnection;
  console.log(`In flight insertion`);
  for (let i = 0; i < 5; i++) {
    const flightRepo = getRepository(Flights);
    const flightDetails = flightRepo.create({
      flightName: faker.name.findName(),
      carrier: faker.lorem.text(),
      users: await getRepository(Users)
        .createQueryBuilder()
        .orderBy("RANDOM()")
        .limit(Math.floor(Math.random() * 6))
        .getMany(),
    });
    const tripToFlight = new TripToFlight();
    await connection.manager.save(tripToFlight);
    const tripToFlight2 = new TripToFlight();
    await connection.manager.save(tripToFlight2);

    flightDetails.tripToFlights = [tripToFlight, tripToFlight2];
    await flightRepo.save(flightDetails);
  }

  console.log(`fake flight records inserted successfully!`);
};
