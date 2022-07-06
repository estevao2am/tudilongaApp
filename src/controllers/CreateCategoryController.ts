import { Request,Response } from "express"
import { CreateCategoryService } from "../services/CreateCategoryServices"

export class CreateCategoryController {
    async handle(request:Request, response:Response){
        const { name, description } = request.body

        const createCategoryService = new CreateCategoryService()

        const result = await createCategoryService.execute({name,description})
        
        if(result instanceof Error){
            return response.status(400).json(result.message)
        }
        return response.json(result)
    }
}
