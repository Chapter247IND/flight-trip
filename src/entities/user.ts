import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Company from "./company";

@Entity({ name: "users" })
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 150,
    type: "varchar",
  })
  name: string;

  @Column({
    length: 150,
    type: "varchar",
  })
  email: string;

  @Column({
    type: "varchar",
  })
  phone: string;


  @ManyToOne((type) => Company) /* (company) => company.users */
  //@JoinColumn()
  company: Company;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default User;
