import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import { ICreateUsersDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

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
    avatar,
    id,
  }: ICreateUsersDTO): Promise<void> {
    const userAlreadyExists = await this.repository.findByEmail(email);

    if (userAlreadyExists) throw new AppError("User already exists");

    const passwordHash = await hash(password, 8);
    await this.repository.create({
      name,
      email,
      driver_license,
      password: passwordHash,
      avatar,
      id,
    });
  }
}

export { CreateUserUseCase };
