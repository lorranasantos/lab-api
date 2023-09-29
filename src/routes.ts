import laboratoryRouter from '@routes/laboratory.routes';
import usersRouter from '@routes/user.routes';
import userTypeRouter from '@routes/userType.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/userType', userTypeRouter);
routes.use('/user', usersRouter);
routes.use('/laboratory', laboratoryRouter);

export default routes;
