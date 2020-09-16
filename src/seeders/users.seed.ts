import faker from "faker";
import { getRepository } from "typeorm";
import { Users } from "../entities";
import dbConnection from "../utills/db.connection";

export default async () => {
  await dbConnection;
  console.log(`In user insertion`);
  for (let i = 0; i < 5; i++) {
    const user = getRepository(Users).create({
      name: faker.name.firstName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
    });
    await getRepository(Users).save(user);
  }
  console.log(`fake user records inserted successfully!`);
};
