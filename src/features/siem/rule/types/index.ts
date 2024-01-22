import { z } from 'zod';

import {
  generalFormSchema,
  conditionFormSchema,
  detectionTimeSchema,
} from '../schemas';

export type GeneralForm = z.infer<
  typeof generalFormSchema
>;

export type ConditionForm = z.infer<
  typeof conditionFormSchema
>;

export type DetectionTime = z.infer<
  typeof detectionTimeSchema
>;
