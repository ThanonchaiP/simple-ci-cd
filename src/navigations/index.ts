import { logManagementItem } from './log-management';

export const getNavigation = (module: string) => {
  switch (module) {
    case 'log-management':
      return logManagementItem;
    default:
      return [];
  }
};
