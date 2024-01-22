import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import {
  APP_PATH,
  CYBER_SECURITY_PATH,
  CYBER_SECURITY_SIEM_PATH,
} from '@/config/module';
import { Section } from '@/types/navigation';

const path = `/${APP_PATH}/${CYBER_SECURITY_PATH}/${CYBER_SECURITY_SIEM_PATH}`;

export const siemItem: Section[] = [
  {
    items: [
      {
        title: 'Detection Rule',
        icon: <WarningAmberIcon />,
        path: `${path}/detection-rule`,
      },
    ],
  },
];
