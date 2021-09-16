import { Category } from "../model/Category";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateSpecificationDTO): void;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
