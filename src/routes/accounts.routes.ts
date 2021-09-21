import { Router } from "express";

import { CreateUserController } from "../modules/accounts/usecases/createUser/CreateUserController";

const accountsRoutes = Router();

const createUserController = new CreateUserController();
accountsRoutes.post("/", createUserController.handle);

export { accountsRoutes };
