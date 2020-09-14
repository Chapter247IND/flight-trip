import { FastifyRequest, FastifyReply } from "fastify";
import dbConnection from "../utills/db.connection";
import { getRepository, getConnection } from "typeorm";
import { Users } from "../entities";
//import UserDetails  from "../data/user.json";
import UserDetails from "../data/user";

const addUser = async () => {
  try {
    await dbConnection;
    const userReposiroty = getRepository(Users);
    /* const users = await userReposiroty.findOne({
      where: {
        email: email
      }
    }); */
    console.log("userReposiroty++++++", UserDetails);
    
   // const userDetail = await userReposiroty.create(UserDetails);
   const userDetail = await getConnection().createQueryBuilder().insert().into(Users).values(UserDetails).execute()
    return userDetail;
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

export default addUser

