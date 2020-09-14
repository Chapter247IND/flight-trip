import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
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

  @Column()
  companyId: number;

  @ManyToOne((type) => Company)
  @JoinColumn()
  company: Company;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default User;
