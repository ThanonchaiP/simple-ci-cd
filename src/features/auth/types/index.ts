import { z } from 'zod';

import { credentialSchema } from '../schemas';

export type Credential = z.infer<typeof credentialSchema>;
