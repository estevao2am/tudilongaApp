import { Library } from "../entities/Library";
import { CategoryRepository,UserRepository, LibraryRepository } from "../repositories"


type LibraryRequest = {
    name:string,
    description:string,
    url:string,
    category_id:string
    user_id:string
}

export class CreateLibraryService {
    async execute({name,description,url,category_id,user_id}:LibraryRequest):Promise<Error|Library>{
        const repo = LibraryRepository();
        const repoCategory = CategoryRepository() // Chamando o repo da categoria
        const userRepo = UserRepository()

        if(!await repoCategory.findOne(category_id)){
            return new Error("Category Doen´t Exists")
        }

        
        if(!await userRepo.findOne(user_id)){
            return new Error("User Doen´t Exists")
        }

        const library = repo.create({name,description,url,category_id,user_id})

        await repo.save(library);
        return library;
    }
}