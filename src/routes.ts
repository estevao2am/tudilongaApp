import { Router } from "express";
import { CreatePermissionController } from "./controllers/CreatePermissionController";
import { CreatePostController } from "./controllers/CreatePostController";
import { CreateRoleController } from "./controllers/CreateRoleController";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllPostController } from "./controllers/GetAllPostController";
import { GetAllUserController } from "./controllers/GetAllUserController";
import { SessionController } from "./controllers/SessionController";
import { ensuredAuthenticated } from "./middleware/ensuredAuthenticated";

const routes = Router();

// Rota de Boas Vindas
routes.get("/",(Request,Response) => {
return Response.json({message:"Welcome to Todilonga App"})})


// Rontas de Usuarios
routes.get("/users", new GetAllUserController().handle);
routes.post("/users", new CreateUserController().handle);
routes.post("/login", new SessionController().handle);

// Rotas de Posts
routes.get("/posts", new GetAllPostController().handle);
routes.post("/posts",new CreatePostController().handle);

// Rotas de Permissões
//Protgendo a rota de permissões
routes.post("/role", ensuredAuthenticated(), new CreateRoleController().handle);
routes.post("/permission", ensuredAuthenticated(), new CreatePermissionController().handle);


export { routes };
