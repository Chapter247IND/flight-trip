import dbConnection from "@server/utills/db.connection";
import { getRepository, getConnection } from "typeorm";
import { Users, Companies } from "@server/entities";
import faker from "faker";

export default async () => {
  await dbConnection;
  console.log(`In Comapny insertion`);
  const connection = getConnection();
  const companies = [];
  for (let i = 0; i < 5; i++) {
    const companyRepo = getRepository(Companies);
    const compnay = companyRepo.create({
      name: faker.company.companyName(),
      users: await getRepository(Users)
        .createQueryBuilder()
        .orderBy("RANDOM()")
        .getMany(),
      administrator: await getRepository(Users)
        .createQueryBuilder()
        .orderBy("RANDOM()")
        .getOne(),
    });
    await companyRepo.save(compnay);
  }

  console.log(`fake company records inserted successfully!`);
};
