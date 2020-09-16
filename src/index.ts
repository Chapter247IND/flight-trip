import dotenv from "dotenv";
import fastify, { FastifyInstance } from "fastify";
import fastifyBlipp from "fastify-blipp";
import fastifyCORS from "fastify-cors";
import { IncomingMessage, Server, ServerResponse } from "http";
import seeder from "./seeders";
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
    // only runs when SEED_DB is true i.e. npm run db:seed
    if (process.env.SEED_DB) {
      await seeder();
      process.exit();
    }
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
