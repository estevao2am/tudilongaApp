import { request, Router } from "express";
import { CreateFinacieController } from "./controllers/CreateFinaciesController";
import { ensuredAuthenticated } from "./middleware/ensuredAuthenticated";
import multer from "multer";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { GetAllCategoryController } from "./controllers/GetAllCategoriesControllers";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";
import { GetAllFinaciesController } from "./controllers/GetAllFinaciesController";
import multerConfig from "./config/multer";
const routes = Router();

// Rota de Boas Vindas
routes.get("/",(Request,Response) => {
return Response.json({message:"Welcome to Financie App"})})


// Rontas de Usuarios[que pode ser : Funcionario,Admin e etc] do tudilonga
routes.get("/financies", new GetAllFinaciesController().handle);
routes.post("/financies", new CreateFinacieController().handle);






//  Categories Routes
routes.post("/categories", new CreateCategoryController().handle)
routes.get("/categories" ,new GetAllCategoryController().handle)
routes.delete("/categories/:id" ,new DeleteCategoryController().handle)
routes.put("/categories/:id",new UpdateCategoryController().handle)


export { routes };
