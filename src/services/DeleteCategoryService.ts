import {Category  } from "../entities/Category"
import { CategoryRepository } from "../repositories"

export class DeleteCategoryService {
    async execute(id:string){
        const repo = CategoryRepository()

        if(!(await repo.findOne(id))){
            return new Error("Category doen´t exists")
        }
        await repo.delete
    }
}