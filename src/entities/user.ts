import { company } from "faker";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Company from "./company";
import Trip from "./trip";

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

  @ManyToOne((type) => Company, (company) => company.users)
  @JoinColumn({ name: "companyId" })
  company: Company;

  @ManyToMany(() => Trip)
  trips: Trip[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default User;
