import {Request,Response  } from "express"
import {  CreateLibraryService} from "../services/CreateLibraryService"

export class CreateLibraryController {
    async handle(request:Request,response:Response){
        const { name,description,category_id,user_id} = request.body
    const{filename} = request.file;
        const service = new CreateLibraryService();

        const result = await service.execute({
            name,
            description,
            url:filename,
            category_id,
            user_id
        });

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}