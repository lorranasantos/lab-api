import userTypeRouter from '@routes/userType.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/userType', userTypeRouter);
routes.use('/user', userTypeRouter);

export default routes;
