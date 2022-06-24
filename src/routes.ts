import { request, Router } from "express";
import { CreatePermissionController } from "./controllers/CreatePermissionController";
import { CreateTurismController } from "./controllers/CreateTurismController";
import { CreateRoleController } from "./controllers/CreateRoleController";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllTurismController } from "./controllers/GetAllTurismController";
import { SessionController } from "./controllers/SessionController";
import { ensuredAuthenticated } from "./middleware/ensuredAuthenticated";
import { CreateUserAccessControlListController } from "./controllers/CreateUserAccessControlListController";
import { CreateRolePermissionController } from "./controllers/CreateRolePermissionsController";
import multer from "multer";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { GetAllCategoryController } from "./controllers/GetAllCategoriesControllers";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";
import { CreateLibraryController } from "./controllers/CreateLibraryController";
import { GetAllLibraryController } from "./controllers/GetAllLibraryController";
import multerConfig from "./config/multer";
import { GetAllUserController } from "./controllers/GetAllUserController";
const routes = Router();

// Rota de Boas Vindas
routes.get("/",(Request,Response) => {
return Response.json({message:"Welcome to Todilonga App"})})


// Rontas de Usuarios[que pode ser : Funcionario,Admin e etc] do tudilonga
routes.get("/users", new GetAllUserController().handle);
routes.post("/users", new CreateUserController().handle);
routes.post("/login", new SessionController().handle);

// Rotas de Permissões
//Protegendo a rota de permissões
routes.post("/role", ensuredAuthenticated(), new CreateRoleController().handle);
routes.post("/permission", ensuredAuthenticated(), new CreatePermissionController().handle);

//Create ACL Routes -- Atribuindo permissões e papeis à um usuario
routes.post("/user_acl", ensuredAuthenticated(), new CreateUserAccessControlListController().handle);

routes.post("/roles/:roleId", new CreateRolePermissionController().handle)

// Rotas de Turism, ... Working it
routes.get("/turism", new GetAllTurismController().handle);
routes.post("/turism",multer(multerConfig).single("file"),new CreateTurismController().handle);

// Rotas dos Usuarios Normais
//routes.post("/normal_user",new CreateNormalUserController().handle);
//routes.post("/normal_user_login",new NormalUserSessionController().handle);
// Lista de todos os usuarios normais do Tudilonga, o admin deve estar logado
//routes.get("/normal_user",  ensuredAuthenticated(),new GetAllNormalUserController().handle);

// Welcome Normal_user Route. Depois de passar o proceso de login, essa será a routa a ser renderizar
//routes.get("/test", ensuredAuthenticated(), new normalUserText().handle)

// Upload de Pdf Library
routes.post("/libraries",multer(multerConfig).single("file"), new CreateLibraryController().handle)
routes.get("/libraries",ensuredAuthenticated(),new GetAllLibraryController().handle)

//  Categories Routes
routes.post("/categories",ensuredAuthenticated(),new CreateCategoryController().handle)
routes.get("/categories",ensuredAuthenticated(), new GetAllCategoryController().handle)
routes.delete("/categories/:id",ensuredAuthenticated(), new DeleteCategoryController().handle)
routes.put("/categories/:id",ensuredAuthenticated(), new UpdateCategoryController().handle)


export { routes };
