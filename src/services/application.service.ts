import { prisma } from '../database/prisma';
import {
  TApplication,
  TApplicationCreate,
} from '../schemas/application.schemas';

export class ApplicationService {
  async create(
    opportunityId: number,
    body: TApplicationCreate,
  ): Promise<TApplication> {
    const data = await prisma.application.create({
      data: { opportunityId, ...body },
    });
    return data as TApplication;
  }

  async findMany(opportunityId: number): Promise<TApplication[]> {
    const data = await prisma.application.findMany({
      where: {
        opportunityId,
      },
    });
    return data as TApplication[];
  }
}
