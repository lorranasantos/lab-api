import CreateLaboratoryService from '@services/Laboratory/CreateUserTypeService';
import DeleteLaboratoryService from '@services/Laboratory/DeleteUserService';
import ListLaboratoryService from '@services/Laboratory/ListUserService';
import { Request, Response } from 'express';

export default class LaboratoryController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listLaboratory = new ListLaboratoryService();

    const laboratory = await listLaboratory.execute();

    return response.json(laboratory);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { user_type } = request.body;

    const createLaboratory = new CreateLaboratoryService();

    const laboratory = await createLaboratory.execute({ user_type });

    return response.json(laboratory);
  }

  // public async update(request: Request, response: Response): Promise<Response> {
  //   const { user_type } = request.body;
  //   const { id } = request.params;

  //   const updateLaboratory = new UpdateLaboratoryService();

  //   const laboratory = await updateLaboratory.execute({ id, user_type });

  //   return response.json(laboratory);
  // }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteLaboratory = new DeleteLaboratoryService();

    await deleteLaboratory.execute({ id });

    return response.json([]);
  }
}
