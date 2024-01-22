import { Module, ModuleItem } from '@/types/module';

export const APP_PATH = 'apps';
export const CYBER_SECURITY_PATH = 'cyber-security';

// CYBER_SECURITY:
export const CYBER_SECURITY_LOG_MANAGEMENT_PATH = `log-management`;
export const CYBER_SECURITY_SIEM_PATH = 'siem';
export const CYBER_SECURITY_CYBER_THREAT_INTELLIGENCE_PATH = `threat-intelligence`;

export const APPS: Module[] = [
  {
    title: 'Cyber Security',
    id: 'cyberSecurity',
    description:
      'ระบบจัดการความเสี่ยงทางไซเบอร์ขององค์กรแบบครบวงจร',
    path: `/${APP_PATH}/${CYBER_SECURITY_PATH}`,
  },
];

export const CYBER_SECURITY_CONFIG: ModuleItem[] = [
  {
    title: 'Log Management',
    id: 'logManagement',
    description:
      'รวบรวม จัดเก็บไฟล์ Log และข้อมูลด้านความปลอดภัย พร้อมหาความสัมพันธ์เกี่ยวกับเหตุภัยคุกคาม',
    path: `/${APP_PATH}/${CYBER_SECURITY_PATH}/${CYBER_SECURITY_LOG_MANAGEMENT_PATH}`,
    appId: 'cyberSecurity',
  },
  {
    title:
      'Security Information and Event Management (SIEM)',
    id: 'siem',
    description:
      'วิเคราะห์หาความสัมพันธ์ แจ้งเตือนเพื่อป้องกัน และตรวจจับภัย คุกคามทางไซเบอร์',
    path: `/${APP_PATH}/${CYBER_SECURITY_PATH}/${CYBER_SECURITY_SIEM_PATH}`,
    appId: 'cyberSecurity',
  },
  {
    title: 'Cyber Threat Intelligence',
    id: 'threatIntelligence',
    description:
      'รวบรวม อัปเดตข้อมูลการข่าวเกี่ยวกับภัยคุกคามทางไซเบอร์ เพื่อเพิ่มศักยภาพในการป้องกันภัย',
    path: `/${APP_PATH}/${CYBER_SECURITY_PATH}/${CYBER_SECURITY_CYBER_THREAT_INTELLIGENCE_PATH}`,
    appId: 'cyberSecurity',
  },
];

export const APP_ITEMS: Record<string, ModuleItem[]> = {
  cyberSecurity: CYBER_SECURITY_CONFIG,
};
