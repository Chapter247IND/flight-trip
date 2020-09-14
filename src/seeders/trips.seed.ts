import dbConnection from "@server/utills/db.connection";

export default async () => {
  await dbConnection;
  console.log(`Database connected sucessfully!`);
};
