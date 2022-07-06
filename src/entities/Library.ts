import { Entity, Column, CreateDateColumn, PrimaryColumn,UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./Category";
import { User } from "./User";

@Entity("library")
export class Library{

    @PrimaryColumn()
    id:string

    @Column()
    name: string

    @Column()
    description:string

    @Column()
    url:string


    // Relacionando a tabela para a tabela de categoria...
    @Column()
    category_id:string
    
    @Column()
    user_id:string

    @ManyToOne(()=>Category)
    @JoinColumn({name:"category_id"})
    category:Category

    @ManyToOne(()=>User)
    @JoinColumn({name:"user_id"})
    user:User

    @CreateDateColumn()
    created_at:Date;
    
    @UpdateDateColumn()
    update_at:Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }



}