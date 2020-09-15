import dotenv from "dotenv";
import fastify, { FastifyInstance } from "fastify";
import fastifyBlipp from "fastify-blipp";
import { IncomingMessage, Server, ServerResponse } from "http";
import fastifyCORS from "fastify-cors";
import addUser from "./seeders/user";
import addCompany from "./seeders/company";
import { default as SeedTrips } from "./seeders/trips.seed";
import { default as SeedUsers } from "./seeders/users.seed";
import { default as SeedCompaies } from "./seeders/company.seed";
import { default as SeedFlights } from "./seeders/flights.seed";
import { default as SeedFlightUpdation } from "./seeders/flight.update.seed";

// initialize .env
dotenv.config();

const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({ logger: process.env.NODE_ENV === "development" });

// accept cross-origin request
server.register(fastifyCORS, {});
// register routes logger
server.register(fastifyBlipp);

 
//SeedUsers()
 //SeedCompaies()
// SeedTrips()

/**
 * Handle all uncaugth exceptions
 */
process.on("uncaughtException", (error) => {
  // this can be replaced with any kind of logger
  console.error(error);
});
/**
 * Handle all uncaugth rejection
 */
process.on("unhandledRejection", (error) => {
  // this can be replaced with any kind of logger
  console.error(error);
});

(async () => {
  try {
    const port: number = Number(process.env.PORT || "8000");
    await server.listen(port);
    console.log(`🚀 Server ready at http://localhost:${port}`);
    server.blipp();
  } catch (err) {
    console.log(err);
    server.log.error(err);
    process.exit(1);
  }
})();

