import { z } from 'zod';

export const generalFormSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  tags: z.array(z.any()).optional(),
  indices: z.string(),
  query: z.string().optional(),
  groupBy: z.array(z.any()).optional(),
});

export const conditionFormSchema = z.object({
  when: z.string(),
  field: z.string().optional(),
  test: z.array(
    z.object({
      is: z.string(),
      number: z.string(),
      severity: z.string(),
    })
  ),
});

export const detectionTimeSchema = z.object({
  every: z.string(),
  unit: z.string(),
});
