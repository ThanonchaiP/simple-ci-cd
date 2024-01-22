import DashboardIcon from '@mui/icons-material/Dashboard';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import {
  APP_PATH,
  CYBER_SECURITY_PATH,
  CYBER_SECURITY_LOG_MANAGEMENT_PATH,
} from '@/config/module';
import { Section } from '@/types/navigation';

const path = `/${APP_PATH}/${CYBER_SECURITY_PATH}/${CYBER_SECURITY_LOG_MANAGEMENT_PATH}`;

export const logManagementItem: Section[] = [
  {
    items: [
      {
        title: 'Dashboard',
        icon: <DashboardIcon />,
        path: `${path}/dashboard`,
      },
      {
        title: 'Detection Rule',
        icon: <WarningAmberIcon />,
        path: `${path}/detection-rule`,
      },
    ],
  },
];
