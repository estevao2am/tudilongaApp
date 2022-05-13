import { Permission } from "../entities/Permission";
import { PermissionRepository } from "../repositories";

type PermissionRequest = {
    name: string,
    description:string
}
export class CreatePermissionService {
    async execute({name,description}:PermissionRequest):Promise<Permission | Error>{
        const repo = PermissionRepository()

        if(await repo.findOne({name})){
            return new Error("Role already Exists")
        }
        const permission = repo.create({name,description})
        await repo.save(permission)
        return permission;
    }
}