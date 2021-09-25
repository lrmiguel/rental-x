import { AppError } from "../../../../errors/AppError";
import { CategoriesInMemoryRepository } from "../../repositories/implementations/CategoriesInMemoryRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesInMemoryRepository: CategoriesInMemoryRepository;

describe("Create category", () => {
  beforeEach(() => {
    categoriesInMemoryRepository = new CategoriesInMemoryRepository();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesInMemoryRepository
    );
  });

  it("should be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      description: "Category Description Test",
    };
    await createCategoryUseCase.execute(category);

    const createdCategory = await categoriesInMemoryRepository.findByName(
      category.name
    );

    expect(createdCategory).toHaveProperty("id");
  });

  it("should not be able to create a new category with existing name", async () => {
    expect(async () => {
      const category = {
        name: "Category Test",
        description: "Category Description Test",
      };
      await createCategoryUseCase.execute(category);
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
