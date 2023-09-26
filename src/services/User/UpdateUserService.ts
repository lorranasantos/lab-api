import User from '@app/entities/User';
import UserType from '@app/entities/UserType';
import UsersRepository from '@app/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository, getRepository } from 'typeorm';

interface IRequest {
  id: string;
  name: string;
  email: string;
  cpf: string;
  password: string;
  isActive: boolean;
  phone: string;
  idUserType: string;
}

class UpdateUserService {
  public async execute({
    id,
    name,
    email,
    cpf,
    password,
    phone,
    isActive,
    idUserType,
  }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UsersRepository);

    const user = await userRepository.findOne(id);

    if (!user) {
      throw new AppError('User not found');
    }

    user.name = name;
    user.email = email;
    user.cpf = cpf;
    user.password = password;
    user.isActive = isActive;
    user.phone = phone;
    user.idUserType = idUserType;

    await userRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
