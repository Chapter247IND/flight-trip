import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
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

  @OneToMany((type) => User, (user) => user.company)
  users: User[];

  @ManyToOne(() => User)
  @JoinColumn({ name: "administratorId" })
  administrator: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Company;
