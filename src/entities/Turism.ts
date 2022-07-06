import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { User } from "./User";

@Entity("turism")
export class Turism extends BaseEntity {
  @Column()
  name: string;

  @Column()
  localizacao:string

  @Column()
  content: string;

  @Column()
  url:string

  @Column()
  user_id:string

  @ManyToOne(()=>User)
  @JoinColumn({name:"user_id"})
  user:User

  
}
