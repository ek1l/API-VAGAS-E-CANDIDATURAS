import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/prisma';
import { AppError } from '../errors/appError';

export class IsOppotunityIdValid {
  static async execute(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const opportunity = await prisma.opportunity.findFirst({
      where: { id: Number(id) },
    });
    if (!opportunity) {
      throw new AppError(404, 'Opportunity not found');
    }
    res.locals.opportunity;
    next();
  }
}
