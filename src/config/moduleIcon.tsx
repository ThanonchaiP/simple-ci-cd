import { ReactNode } from 'react';

import {
  LogIcon,
  SiemIcon,
  ThreatIcon,
} from '@/components/util-components';

type ModuleIcons = {
  [key: string]: ReactNode;
};

type AllModuleIcons = {
  [key: string]: ModuleIcons;
};

const CYBER_SECURITY_ICONS: ModuleIcons = {
  logManagement: <LogIcon />,
  siem: <SiemIcon />,
  threatIntelligence: <ThreatIcon />,
};

export const MODULE_ICONS: AllModuleIcons = {
  cyberSecurity: CYBER_SECURITY_ICONS,
};
