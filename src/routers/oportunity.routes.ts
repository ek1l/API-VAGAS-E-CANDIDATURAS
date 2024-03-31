import { Router } from 'express';
import { OportunityController } from '../controllers/oportunity.controller';
import { applicationRouter } from './application.routes';
import { ValidateBody } from '../middleware/validateBody.middleware';
import {
  opportunityCreateSchema,
  opportunityUpdateSchema,
} from '../schemas/opportunity.schema';

export const oportunityRouter = Router();

const oportunityControllers = new OportunityController();

oportunityRouter.post(
  '/',
  ValidateBody.execute(opportunityCreateSchema),
  oportunityControllers.create,
);
oportunityRouter.get('/', oportunityControllers.findMany);

oportunityRouter.get('/:id', oportunityControllers.findOne);
oportunityRouter.patch(
  '/:id',
  ValidateBody.execute(opportunityUpdateSchema),
  oportunityControllers.update,
);
oportunityRouter.delete('/:id', oportunityControllers.delete);

oportunityRouter.use('/', applicationRouter);
