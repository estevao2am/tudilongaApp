import {Request,Response} from "express"
import {CreateUserAccessControlListService}from "../services/CreateUserAccessCotrolListService"

export class CreateUserAccessControlListController{
    async handle(request:Request,response:Response){
        const {  permissions, roles } = request.body
        const { userId } = request

        const createUserACLService = new CreateUserAccessControlListService()

        const result = await createUserACLService.execute({
            userId,roles,permissions
        })

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }
        return response.json(result)
    }
}