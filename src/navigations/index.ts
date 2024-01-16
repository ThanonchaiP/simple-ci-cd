import { logManagementItem } from './log-management';
import { siemItem } from './siem';

export const getNavigation = (module: string) => {
  switch (module) {
    case 'log-management':
      return logManagementItem;
    case 'siem':
      return siemItem;
    default:
      return [];
  }
};
