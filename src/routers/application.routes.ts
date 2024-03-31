import { Router } from 'express';
import { ApplicationController } from '../controllers/application.controller';

export const applicationRouter = Router();

const applicationControllers = new ApplicationController();

applicationRouter.post('/', applicationControllers.create);
applicationRouter.get('/', applicationControllers.findMany);
