import { Request, Response } from 'express';
import { ApplicationService } from '../services/application.service';

export class ApplicationController {
  async create(req: Request, res: Response) {
    const { id } = req.params;
    const body = req.body;
    const applicationService = new ApplicationService();
    const response = await applicationService.create(Number(id), body);
    return res.status(201).json(response);
  }

  async findMany(req: Request, res: Response) {
    const { id } = req.params;
    const applicationService = new ApplicationService();
    const response = await applicationService.findMany(Number(id));
    console.log(response);
    return res.status(200).json(response);
  }
}
