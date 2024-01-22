import {
  CYBER_SECURITY_CYBER_THREAT_INTELLIGENCE_PATH,
  CYBER_SECURITY_LOG_MANAGEMENT_PATH,
  CYBER_SECURITY_SIEM_PATH,
} from '@/config/module';

import { logManagementItem } from './log-management';
import { siemItem } from './siem';
import { threatIntelligenceItem } from './threat-intelligence';

export const getNavigation = (module: string) => {
  switch (module) {
    case CYBER_SECURITY_LOG_MANAGEMENT_PATH:
      return logManagementItem;
    case CYBER_SECURITY_SIEM_PATH:
      return siemItem;
    case CYBER_SECURITY_CYBER_THREAT_INTELLIGENCE_PATH:
      return threatIntelligenceItem;
    default:
      return [];
  }
};
