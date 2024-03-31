import { Router } from 'express';
import { ApplicationController } from '../controllers/application.controller';
import { ValidateBody } from '../middleware/validateBody.middleware';
import { applicationCreateSchema } from '../schemas/application.schemas';

export const applicationRouter = Router();

const applicationControllers = new ApplicationController();

applicationRouter.post(
  '/:id/applications',
  ValidateBody.execute(applicationCreateSchema),
  applicationControllers.create,
);
applicationRouter.get('/:id', applicationControllers.findMany);
