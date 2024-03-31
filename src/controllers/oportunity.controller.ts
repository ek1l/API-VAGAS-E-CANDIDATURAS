import { Request, Response } from 'express';
import { OportunityService } from '../services/oportunity.service';

export class OportunityController {
  async create(req: Request, res: Response) {
    const opportunityServices = new OportunityService();
    const response = await opportunityServices.create(req.body);
    return res.status(201).json(response);
  }

  async findMany(req: Request, res: Response) {
    const opportunityServices = new OportunityService();
    const response = await opportunityServices.findMany();
    console.log(response);
    return res.status(200).json(response);
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const opportunityServices = new OportunityService();
    const response = await opportunityServices.findOne(Number(id));
    return res.status(200).json(response);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const opportunityServices = new OportunityService();
    const response = await opportunityServices.update(Number(id), req.body);
    return res.status(200).json(response);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const opportunityServices = new OportunityService();
    await opportunityServices.delete(Number(id));
    return res.status(204).json({});
  }
}
