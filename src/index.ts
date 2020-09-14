import dotenv from "dotenv";
import fastify, { FastifyInstance } from "fastify";
import fastifyBlipp from "fastify-blipp";
import { IncomingMessage, Server, ServerResponse } from "http";
import fastifyCORS from "fastify-cors";
import addUser from "./seeders/user";
import addCompany from "./seeders/company";

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

//addUser()
//addCompany()

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

/* createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
 */
