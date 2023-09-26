import UserType from '@entities/UserType';
import AppError from '@config/AppErrors';
import { getRepository } from 'typeorm';

interface IRequest {
  id: string;
  type: string;
}

class UpdateUserTypeService {
  public async execute({ id, type }: IRequest): Promise<UserType> {
    const userTypeRepository = getRepository(UserType);

    const userType = await userTypeRepository.findOne(id);

    if (!userType) {
      throw new AppError('User Type not found');
    }

    userType.type = type;

    await userTypeRepository.save(userType);

    return userType;
  }
}

export default UpdateUserTypeService;
