import { injectable } from "tsyringe";
import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";
import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

@injectable()
class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async findByName(name: string): Promise<Category> {
    return this.repository.findOne({ name });
  }

  async list(): Promise<Category[]> {
    return this.repository.find();
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      description,
      created_at: new Date(),
    });
    await this.repository.save(specification);
  }
}

export { SpecificationsRepository };
