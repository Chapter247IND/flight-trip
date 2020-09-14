import dbConnection from "@server/utills/db.connection";
import { getRepository, getConnection } from "typeorm";
import { Users } from "@server/entities";
import faker from "faker";
export default async () => {
  await dbConnection;
  console.log(`In user insertion`);
  const connection = getConnection();
  const fakeUsers = [];
  for (let i = 0; i < 50; i++) {
    fakeUsers.push({
      name: faker.name.firstName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
    });
  }
  await connection
    .createQueryBuilder()
    .insert()
    .into(Users)
    .values(fakeUsers)
    .execute();
  console.log(`50 new fake user records inserted successfully!`);
};
