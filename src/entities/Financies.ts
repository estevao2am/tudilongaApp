import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Category } from "./Category";


@Entity("financies")
export class Financies extends BaseEntity {
  @Column()
  name: string;
  @Column()
  value: Number;

  @Column()
  data: Date;

  @Column()
  category_id: string;

  @ManyToOne(()=>Category)
  @JoinColumn({name:"category_id"})
  category:Category
}
