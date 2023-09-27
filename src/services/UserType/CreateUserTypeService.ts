import UserType from '@entities/UserType';
import { getRepository } from 'typeorm';

interface IRequest {
  type: string;
}

class CreateUserTypeService {
  public async execute({ type }: IRequest): Promise<UserType> {
    const userTypeRepository = getRepository(UserType);

    const userType = userTypeRepository.create({ type });

    await userTypeRepository.save(userType);

    return userType;
  }
}

export default CreateUserTypeService;
