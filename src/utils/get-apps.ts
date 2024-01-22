import {
  CYBER_SECURITY_CONFIG,
  CYBER_SECURITY_PATH,
} from '@/config/module';

export const getApps = (module: string) => {
  switch (module) {
    case CYBER_SECURITY_PATH:
      return CYBER_SECURITY_CONFIG;
    default:
      return [];
  }
};
