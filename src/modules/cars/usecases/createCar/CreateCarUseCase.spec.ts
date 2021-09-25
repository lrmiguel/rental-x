import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsInMemoryRepository } from "@modules/cars/repositories/implementations/CarsInMemoryRepository";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsInMemoryRepository: ICarsRepository;

describe("Create Car", () => {
  beforeEach(() => {
    carsInMemoryRepository = new CarsInMemoryRepository();
    createCarUseCase = new CreateCarUseCase(carsInMemoryRepository);
  });

  it("should be able to create a new car", async () => {
    await createCarUseCase.execute({
      name: "Name Car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
  });

  it("should not be able to create a car with existent license plate", () => {
    expect(async () => {
      expect(async () => {
        await createCarUseCase.execute({
          name: "Name Car",
          description: "Description Car",
          daily_rate: 100,
          license_plate: "ABC-1234",
          fine_amount: 60,
          brand: "Brand",
          category_id: "category",
        });

        await createCarUseCase.execute({
          name: "Name Car 2",
          description: "Description Car",
          daily_rate: 100,
          license_plate: "ABC-1234",
          fine_amount: 60,
          brand: "Brand",
          category_id: "category",
        });
      }).rejects.toBeInstanceOf(AppError);
    });
  });

  it("should be able to create a car with availability by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Car Available",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    expect(car).toHaveProperty("available", true);
  });
});
