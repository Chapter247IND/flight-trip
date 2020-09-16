import { default as SeedCompaies } from "./company.seed";
import { default as SeedFlights } from "./flights.seed";
import { default as SeedTrips } from "./trips.seed";
import { default as SeedUsers } from "./users.seed";

export default async () => {
  await SeedUsers();
  await SeedCompaies();
  await SeedFlights();
  await SeedTrips();
  console.log(`Database seeded successfully!`);
};
