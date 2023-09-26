import { Router } from 'express';
import CreateUserTypeController from '@controllers/CreateUserTypeController';
import { celebrate, Joi, Segments } from 'celebrate';

const userTypeRouter = Router();
const userTypeController = new CreateUserTypeController();

userTypeRouter.get('/', userTypeController.index);

userTypeRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      type: Joi.string().required(),
    },
  }),
  userTypeController.create,
);

userTypeRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      type: Joi.string().required(),
    },
  }),
  userTypeController.update,
);

userTypeRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  userTypeController.delete,
);

export default userTypeRouter;
