import UserType from '@entities/UserType';
import AppError from '@config/AppErrors';
import { getRepository } from 'typeorm';

interface IRequest {
  id: string;
}

class DeleteUserTypeService {
  public async execute({ id }: IRequest): Promise<void> {
    const userTypeRepository = getRepository(UserType);

    const userType = await userTypeRepository.findOne(id);

    if (!userType) {
      throw new AppError('User Type not found');
    }

    await userTypeRepository.remove(userType);
  }
}

export default DeleteUserTypeService;
