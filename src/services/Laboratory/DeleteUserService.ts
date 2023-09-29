import AppError from '@config/AppErrors';
import { getCustomRepository } from 'typeorm';
import LaboratoryRepository from 'src/repositories/LaboratoryRepository';

interface IRequest {
  id: string;
}

class DeleteLaboratoryService {
  public async execute({ id }: IRequest): Promise<void> {
    const labRepository = getCustomRepository(LaboratoryRepository);

    const laboratory = await labRepository.findOne(id);

    if (!laboratory) {
      throw new AppError('Laboratory not found');
    }

    await labRepository.remove(laboratory);
  }
}

export default DeleteLaboratoryService;
