import UserType from '@entities/UserType';
import { getRepository } from 'typeorm';

class ListUserTypeService {
  public async execute(): Promise<UserType[]> {
    const userTypeRepository = getRepository(UserType);

    const userTypes = userTypeRepository.find();

    return userTypes;
  }
}

export default ListUserTypeService;
