import { Request, Response } from "express"
import {  GetAllLibraryService} from "../services/GetAllLibraryService"

export class GetAllLibraryController {
    async handle(request:Request,response:Response){
        const service = new GetAllLibraryService();

        const library = await service.execute();
        return response.json(library)
    }
}