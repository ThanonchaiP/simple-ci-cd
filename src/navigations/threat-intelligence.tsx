import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import {
  APP_PATH,
  CYBER_SECURITY_PATH,
  CYBER_SECURITY_CYBER_THREAT_INTELLIGENCE_PATH,
} from '@/config/module';
import { Section } from '@/types/navigation';

const path = `/${APP_PATH}/${CYBER_SECURITY_PATH}/${CYBER_SECURITY_CYBER_THREAT_INTELLIGENCE_PATH}`;

export const threatIntelligenceItem: Section[] = [
  {
    items: [
      {
        title: 'Organization',
        icon: <WarningAmberIcon />,
        path: `${path}/organization`,
      },
    ],
  },
];
