'use client';

import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';

import { VerticalLayout } from '@/components/layout-components/vertical-layout';
import { getNavigation } from '@/navigations';

type LayoutProps = {
  children: React.ReactNode;
};

const ModuleLayout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const currentModule = pathname.split('/')[3];

  return (
    <VerticalLayout
      sections={getNavigation(currentModule)}
    >
      <Box sx={{ padding: '28px 24px' }}>{children}</Box>
    </VerticalLayout>
  );
};

export default ModuleLayout;
