'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import type { FC, ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';

import { SettingsProvider } from '@/contexts/settings';
import { createTheme } from '@/theme';
import { Settings } from '@/types/setting';

interface RootLayoutProps {
  children: ReactNode;
  settings?: Settings;
}

export const RootLayout: FC<RootLayoutProps> = (
  props: RootLayoutProps
) => {
  const { children, settings } = props;

  const theme = createTheme({
    colorPreset: 'blue',
  });

  return (
    <NextAppDirEmotionCacheProvider
      options={{ key: 'css' }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SettingsProvider settings={settings}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ErrorBoundary fallback={<></>}>
              {children}
            </ErrorBoundary>
          </ThemeProvider>
        </SettingsProvider>
      </LocalizationProvider>
    </NextAppDirEmotionCacheProvider>
  );
};
