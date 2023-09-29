import { Router } from 'express';
import CreateLaboratoryController from '@controllers/CreateLaboratoryController';
import { celebrate, Joi, Segments } from 'celebrate';

const laboratoryRouter = Router();
const laboratoryController = new CreateLaboratoryController();

laboratoryRouter.get('/', laboratoryController.index);

laboratoryRouter.post('/', laboratoryController.create);

// laboratoryRouter.put(
//   '/:id',
//   celebrate({
//     [Segments.PARAMS]: {
//       id: Joi.string().uuid().required(),
//     },
//     [Segments.BODY]: {
//       name: Joi.string().required(),
//       capacity: Joi.int().required(),
//       equipment_qtd: Joi.int().required(),
//     },
//   }),
//   laboratoryController.update,
// );

laboratoryRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  laboratoryController.delete,
);

export default laboratoryRouter;
