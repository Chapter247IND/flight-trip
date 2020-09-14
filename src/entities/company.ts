import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import User from "./user";

@Entity({ name: "companies" })
class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 150,
    type: "varchar",
  })
  name: string;

  @OneToMany((type) => User, user => user.company)
  users: User[];

  @OneToOne(() => User)
  administrator: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Company;
