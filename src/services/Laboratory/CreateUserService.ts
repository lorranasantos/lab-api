import AppError from '@config/AppErrors';
import { getCustomRepository, getRepository } from 'typeorm';
import { Laboratory } from '@entities/Laboratory';
import LaboratoryRepository from 'src/repositories/LaboratoryRepository';

interface IRequest {
  name: string;
  capacity: Number;
  equipments_qtd: Number;
}

class CreateLaboratoryService {
  public async execute({
    name,
    capacity,
    equipments_qtd,
  }: IRequest): Promise<Laboratory> {
    const labRepository = getCustomRepository(LaboratoryRepository);

    const nameExists = await labRepository.findByName(name);

    if (nameExists) {
      throw new AppError('Name address already used!');
    }

    const laboratory = labRepository.create({
      name,
      capacity,
      equipments_qtd,
    });

    await labRepository.save(laboratory);

    return laboratory;
  }
}

export default CreateLaboratoryService;
