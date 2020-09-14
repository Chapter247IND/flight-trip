import dbConnection from "@server/utills/db.connection";
import { getRepository, getConnection } from "typeorm";
import { Users, Companies } from "@server/entities";
import faker from "faker";
export default async () => {
  await dbConnection;
  console.log(`In user insertion`);
  const connection = getConnection();
  const companies = [];
  for (let i = 0; i < 50; i++) {
    companies.push({
      name: faker.name.firstName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      users: await getRepository(Users)
        .createQueryBuilder()
        .orderBy("RANDOM()")
        .limit(Math.floor(Math.random() * 6) + 1)
        .getMany(),
      administrator: await getRepository(Users)
        .createQueryBuilder()
        .orderBy("RANDOM()")
        .limit(1)
        .getOne(),
    });
  }
  await connection
    .createQueryBuilder()
    .insert()
    .into(Companies)
    .values(companies)
    .execute();
  console.log(`50 new fake company records inserted successfully!`);
};
