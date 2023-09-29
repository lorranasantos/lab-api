import AppError from '@config/AppErrors';
import UserType from '@entities/UserType';
import { UserTypeRepository } from 'src/repositories/UserTypeRepository';
import { getCustomRepository, getRepository } from 'typeorm';

interface IRequest {
  user_type: string;
}

class CreateUserTypeService {
  public async execute({ user_type }: IRequest): Promise<UserType> {
    console.log('sure', UserType);

    console.log('ainda em service', UserTypeRepository);
    const userTypeRepository = getCustomRepository(UserTypeRepository);

    console.log(userTypeRepository, 'ei');

    const userTypeExists = await userTypeRepository.findByName(user_type);

    if (userTypeExists) {
      throw new AppError('There is already one tipe with this name');
    }

    console.log(userTypeExists);
    const userType = userTypeRepository.create({ user_type });

    await userTypeRepository.save(userType);

    return userType;
  }
}

export default CreateUserTypeService;
