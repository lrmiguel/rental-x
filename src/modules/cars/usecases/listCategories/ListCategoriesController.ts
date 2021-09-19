import { Request, Response } from "express";
import { container, inject, injectable } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);
    return response.json(await listCategoriesUseCase.execute());
  }
}

export { ListCategoriesController };
