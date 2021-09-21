import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateUsersDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository") private repository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    driver_license,
    password,
  }: ICreateUsersDTO): Promise<void> {
    const userAlreadyExists = await this.repository.findByEmail(email);

    if (userAlreadyExists) throw new Error("User already exists");

    const passwordHash = await hash(password, 8);
    await this.repository.create({
      name,
      email,
      driver_license,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };
