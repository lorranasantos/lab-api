import UserType from '@entities/UserType';
import { getRepository } from 'typeorm';

type IRequest = {
  type: string;
};

export class CreateUserTypeService {
  async execute({ type }: IRequest): Promise<UserType> {
    const userTypeRepository = getRepository(UserType);

    const userType = userTypeRepository.create({ type });

    await userTypeRepository.save(userType);

    return userType;
  }
}
