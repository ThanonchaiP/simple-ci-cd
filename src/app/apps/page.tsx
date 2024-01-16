'use client';

import {
  Box,
  Card,
  Grid,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { HorizontalLayout } from '@/components/layout-components/horizontal-layout';
import { useCssVars } from '@/components/layout-components/horizontal-layout/use-css-vars';
import { APP_ICONS } from '@/config/app-icon';
import { APP_ITEMS } from '@/config/module';
import { APPS } from '@/config/module';
import { MODULE_ICONS } from '@/config/moduleIcon';

export default function AppPage() {
  const theme = useTheme();
  const router = useRouter();
  const cssVars = useCssVars('evident');

  const [currentModule, setCurrentModule] = useState(
    'cyberSecurity'
  );

  const onChangeTab = (module: string) => {
    setCurrentModule(module);
  };

  return (
    <HorizontalLayout>
      <Box
        sx={{
          ...cssVars,
          backgroundColor: 'var(--nav-bg)',
          border: '1px solid var(--nav-divider-color)',
          px: 3,
          py: 1,
        }}
      >
        <Tabs
          value={currentModule}
          onChange={(_, module) => onChangeTab(module)}
          aria-label="modules"
          TabIndicatorProps={{
            hidden: true,
          }}
          sx={{
            ...cssVars,
            '& .MuiTab-root.Mui-selected': {
              color: 'var(--nav-item-active-color)',
            },
            '& .MuiTab-root.Mui-selected svg': {
              color: theme.palette.primary.main,
            },
          }}
        >
          {APPS.map((item) => (
            <Tab
              key={item.id}
              label={item.title}
              value={item.id}
              iconPosition="start"
              icon={APP_ICONS?.[item.id] ?? undefined}
            />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ p: 3 }}>
        <Grid container spacing={4}>
          {APP_ITEMS?.[currentModule].map((item) => (
            <Grid
              key={item.id}
              item
              xs={12}
              md={6}
              xl={4}
            >
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s',
                  cursor: 'pointer',

                  '&:hover': {
                    transform: 'translateY(-5%)',
                  },
                }}
                onClick={() =>
                  router.push(item.path, {
                    scroll: false,
                  })
                }
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: 3,
                    height: '100%',
                    padding: '20px',
                  }}
                >
                  <Box
                    sx={{
                      flexShrink: 1,
                      alignSelf: 'center',
                    }}
                  >
                    {MODULE_ICONS?.[item.appId]?.[
                      item.id
                    ] ?? null}
                  </Box>
                  <Box sx={{ alignSelf: 'center' }}>
                    <Typography
                      variant="body1"
                      fontSize={17}
                      fontWeight={700}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#72849A"
                      fontWeight={700}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </HorizontalLayout>
  );
}
