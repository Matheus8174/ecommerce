import { z } from 'zod';

export const AdminSchema = z.object({
  email: z.string().email("it isn't an email"),
  password: z.string().min(6, 'must have at least 6 characters')
});

export type AdminData = z.infer<typeof AdminSchema>;
