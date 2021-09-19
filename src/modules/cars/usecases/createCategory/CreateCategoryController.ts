import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
    try {
      await createCategoryUseCase.execute({ name, description });
    } catch (err) {
      return response.status(400).json({ error: "Category already exists" });
    }

    return response.status(201).send();
  }
}

export { CreateCategoryController };
