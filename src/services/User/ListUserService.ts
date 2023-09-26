import User from '@app/entities/User';
import UsersRepository from '@app/repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';

class ListUserService {
  public async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = usersRepository.find();

    return users;
  }
}

export default ListUserService;
