import 'express-async-errors';
import express, { json } from 'express';
import helmet from 'helmet';
import { oportunityRouter } from './routers/oportunity.routes';
import { applicationRouter } from './routers/application.routes';
import { HandleErrors } from './middleware/handleErrors.middleware';
export const app = express();
app.use(helmet());
app.use(json());
app.use('/opportunities', oportunityRouter);
app.use('/opportunities/:id/applications', applicationRouter);
app.use(HandleErrors.execute);
