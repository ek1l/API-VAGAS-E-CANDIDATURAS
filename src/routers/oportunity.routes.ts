import { Router } from 'express';
import { OportunityController } from '../controllers/oportunity.controller';
import { applicationRouter } from './application.routes';

export const oportunityRouter = Router();

const oportunityControllers = new OportunityController();

oportunityRouter.post('/', oportunityControllers.create);
oportunityRouter.get('/', oportunityControllers.findMany);
oportunityRouter.get('/:id', oportunityControllers.findOne);
oportunityRouter.put('/:id', oportunityControllers.update);
oportunityRouter.delete('/:id', oportunityControllers.delete);

oportunityRouter.use('/:id/applications', applicationRouter);
