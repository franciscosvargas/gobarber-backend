import { Router } from 'express';
import transactionRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', transactionRouter);

export default routes;
