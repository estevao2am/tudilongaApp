import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("posts")
export class Post extends BaseEntity {
  @Column()
  title: string;

  @Column()
  content: string;

  
}
