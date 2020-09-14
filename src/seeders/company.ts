import { FastifyRequest, FastifyReply } from "fastify";
import dbConnection from "../utills/db.connection";
import { getRepository, getConnection } from "typeorm";
import { Companies } from "../entities";
import CompanyDetails from "../data/company";

const addCompany = async () => {
  try {
    await dbConnection;
    const companyReposiroty = getRepository(Companies);
    /* const users = await userReposiroty.findOne({
      where: {
        email: email
      }
    }); */
    console.log("companyReposiroty++++++", companyReposiroty);
    // const userDetail = await userReposiroty.create(UserDetails);
    const companyDetail = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Companies)
      .values(CompanyDetails)
      .execute();
    return companyDetail;
  } catch (error) {
    console.log(error);
    // prepare error message
    let message = "An error occure while completing your request.";
    if (error.message) {
      message = error.message;
    }
    return message;
  }
};

export default addCompany;
