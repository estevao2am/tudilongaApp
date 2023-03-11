import { Entity, Column, CreateDateColumn, PrimaryColumn,UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("categories")
export class Category{

    @PrimaryColumn()
    id:string

    @Column()
    name: string

    @Column()
    description:string

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