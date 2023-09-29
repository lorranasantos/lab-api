import usersRouter from '@routes/user.routes';
import userTypeRouter from '@routes/userType.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/userType', userTypeRouter);
routes.use('/user', usersRouter);

export default routes;
