import { z } from 'zod';
import { insertSubscriberSchema } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  subscribers: {
    subscribe: {
      method: 'POST' as const,
      path: '/api/newsletter/subscribe',
      input: insertSubscriberSchema,
      responses: {
        201: z.object({ message: z.string() }),
        400: errorSchemas.validation,
      },
    },
  },
};
