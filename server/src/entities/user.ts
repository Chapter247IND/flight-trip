import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne, JoinColumn
} from "typeorm";

import Company from "./company";

@Entity({ name: "users" })
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 150,
  })
  name: string;

  @Column({
    length: 150,
  })
  email: string;

  @Column({})
  phone: string;

  @Column({
    type: "text",
  })
  password: string;

  @OneToOne((type) => Company)
  @JoinColumn()
  company: Company;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default User;