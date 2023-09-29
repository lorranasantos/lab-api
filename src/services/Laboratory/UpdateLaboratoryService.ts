import UserType from '@entities/UserType';
import AppError from '@config/AppErrors';
import { getRepository } from 'typeorm';
import { Laboratory } from '@entities/Laboratory';
import LaboratoryRepository from 'src/repositories/LaboratoryRepository';

interface IRequest {
  id: string;
  name: string;
  capacity: 'int';
  equipments_qtd: 'int';
}

class UpdateLaboratoryService {
  public async execute({
    id,
    name,
    capacity,
    equipments_qtd,
  }: IRequest): Promise<Laboratory> {
    const laboratoryRepository = getRepository(Laboratory);

    const laboratory = await laboratoryRepository.findOne(id);

    if (!laboratory) {
      throw new AppError('User Type not found');
    }

    laboratory.name = name;
    laboratory.capacity = capacity;
    laboratory.equipments_qtd = equipments_qtd;

    await laboratoryRepository.save(laboratory);

    return laboratory;
  }
}

export default UpdateLaboratoryService;
