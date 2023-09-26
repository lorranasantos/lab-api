import { User } from '@entities/User';
import UsersRepository from 'src/repositories/UsersRepository';
import AppError from '@config/AppErrors';
import { getCustomRepository, getRepository } from 'typeorm';

interface IRequest {
  name: string;
  email: string;
  cpf: string;
  password: string;
  isActive: boolean;
  phone: string;
  idUserType: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    cpf,
    password,
    isActive,
    phone,
    idUserType,
  }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const emailExists = await usersRepository.findByEmail(email);
    const cpfExists = await usersRepository.findByCpf(cpf);
    const phoneExists = await usersRepository.findByPhone(phone);

    if (emailExists) {
      throw new AppError('Email address already used!');
    }

    const user = usersRepository.create({
      name,
      email,
      cpf,
      password,
      isActive,
      phone,
      idUserType,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
