import { Companies, Users } from "@server/entities";
import dbConnection from "@server/utills/db.connection";
import faker from "faker";
import { getRepository } from "typeorm";

export default async () => {
  await dbConnection;
  console.log(`In Comapny insertion`);
  for (let i = 0; i < 5; i++) {
    const companyRepo = getRepository(Companies);
    const compnay = companyRepo.create({
      name: faker.company.companyName(),
      users: await getRepository(Users)
        .createQueryBuilder()
        .orderBy("RANDOM()")
        .limit(Math.floor(Math.random() * 6))
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
