import { Category } from "../../entities/Category";
import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];
  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  findByName(name: string): Category {
    return this.specifications.find((s) => s.name === name);
  }
  list(): Category[] {
    throw new Error("Method not implemented.");
  }
  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });
  }
}

export { SpecificationsRepository };
