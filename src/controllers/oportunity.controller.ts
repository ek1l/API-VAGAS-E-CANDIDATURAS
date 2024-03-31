import { Request, Response } from 'express';
import { OportunityService } from '../services/oportunity.service';

export class OportunityController {
  
  async create(req: Request, res: Response) {
    const opportunityServices = new OportunityService();
    const response = await opportunityServices.create(req.body);
    return res.status(201).json(response);
  }

  findMany(req: Request, res: Response) {}

  findOne(req: Request, res: Response) {}

  update(req: Request, res: Response) {}

  delete(req: Request, res: Response) {}
}
