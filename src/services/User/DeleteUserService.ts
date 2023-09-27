import UsersRepository from 'src/repositories/UsersRepository';
import AppError from '@config/AppErrors';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  id: string;
}

class DeleteUserService {
  public async execute({ id }: IRequest): Promise<void> {
    const userRepository = getCustomRepository(UsersRepository);

    const user = await userRepository.findOne(id);

    if (!user) {
      throw new AppError('User not found');
    }

    await userRepository.remove(user);
  }
}

export default DeleteUserService;
