import { LibraryRepository } from "../repositories"

export class GetAllLibraryService{
    async execute(){
        const repo = LibraryRepository();

        // Pegando O os livros com as suas categorias relacionais
        const library = await repo.find({relations:['category','user']});

        return library;
    }
}