import { z } from 'zod';

export const applicationSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  email: z.string().email(),
  linkedin: z.string().url(),
  opportunityId: z.number().positive(),
});

export const applicationCreateSchema = applicationSchema.omit({
  id: true,
  opportunityId: true,
});
export type TApplication = z.infer<typeof applicationSchema>;
export type TApplicationCreate = z.infer<typeof applicationCreateSchema>;
