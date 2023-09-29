import { Laboratory } from '@entities/Laboratory';
import { User } from '@entities/User';
import LaboratoryRepository from 'src/repositories/LaboratoryRepository';
import { getCustomRepository } from 'typeorm';

class ListLaboratoryService {
  public async execute(): Promise<Laboratory[]> {
    const labRepository = getCustomRepository(LaboratoryRepository);

    const laboratory = labRepository.find();

    return laboratory;
  }
}

export default ListLaboratoryService;
