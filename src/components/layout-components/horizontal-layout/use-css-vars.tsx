import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';

import type { NavColor } from '@/types/setting';

export const useCssVars = (
  color: NavColor
): Record<string, string> => {
  const theme = useTheme();

  return useMemo((): Record<string, string> => {
    switch (color) {
      case 'blend-in':
        if (theme.palette.mode === 'dark') {
          return {
            '--nav-bg': theme.palette.background.default,
            '--nav-color': theme.palette.neutral[100],
            '--nav-divider-color':
              theme.palette.neutral[800],
            '--nav-border-color':
              theme.palette.neutral[700],
            '--nav-logo-border':
              theme.palette.neutral[700],
            '--nav-item-color':
              theme.palette.neutral[400],
            '--nav-item-hover-bg':
              'rgba(255, 255, 255, 0.04)',
            '--nav-item-active-bg':
              'rgba(255, 255, 255, 0.04)',
            '--nav-item-active-color':
              theme.palette.text.primary,
            '--nav-item-disabled-color':
              theme.palette.neutral[600],
            '--nav-item-icon-color':
              theme.palette.neutral[500],
            '--nav-item-icon-active-color':
              theme.palette.primary.main,
            '--nav-item-icon-disabled-color':
              theme.palette.neutral[700],
            '--nav-item-chevron-color':
              theme.palette.neutral[700],
            '--nav-scrollbar-color':
              theme.palette.neutral[400],
          };
        } else {
          return {
            '--nav-bg': theme.palette.background.default,
            '--nav-color': theme.palette.text.primary,
            '--nav-divider-color': theme.palette.divider,
            '--nav-border-color':
              theme.palette.neutral[100],
            '--nav-logo-border':
              theme.palette.neutral[100],
            '--nav-section-title-color':
              theme.palette.neutral[400],
            '--nav-item-color':
              theme.palette.text.secondary,
            '--nav-item-hover-bg':
              theme.palette.action.hover,
            '--nav-item-active-bg':
              theme.palette.action.selected,
            '--nav-item-active-color':
              theme.palette.text.primary,
            '--nav-item-disabled-color':
              theme.palette.neutral[400],
            '--nav-item-icon-color':
              theme.palette.neutral[400],
            '--nav-item-icon-active-color':
              theme.palette.primary.main,
            '--nav-item-icon-disabled-color':
              theme.palette.neutral[400],
            '--nav-item-chevron-color':
              theme.palette.neutral[400],
            '--nav-scrollbar-color':
              theme.palette.neutral[900],
          };
        }

      case 'discrete':
        if (theme.palette.mode === 'dark') {
          return {
            '--nav-bg': theme.palette.neutral[900],
            '--nav-color': theme.palette.neutral[100],
            '--nav-divider-color':
              theme.palette.neutral[800],
            '--nav-border-color':
              theme.palette.neutral[700],
            '--nav-logo-border':
              theme.palette.neutral[700],
            '--nav-item-color':
              theme.palette.neutral[400],
            '--nav-item-hover-bg':
              'rgba(255, 255, 255, 0.04)',
            '--nav-item-active-bg':
              'rgba(255, 255, 255, 0.04)',
            '--nav-item-active-color':
              theme.palette.text.primary,
            '--nav-item-disabled-color':
              theme.palette.neutral[600],
            '--nav-item-icon-color':
              theme.palette.neutral[500],
            '--nav-item-icon-active-color':
              theme.palette.primary.main,
            '--nav-item-icon-disabled-color':
              theme.palette.neutral[700],
            '--nav-item-chevron-color':
              theme.palette.neutral[700],
            '--nav-scrollbar-color':
              theme.palette.neutral[400],
          };
        } else {
          return {
            '--nav-bg': theme.palette.neutral[50],
            '--nav-color': theme.palette.text.primary,
            '--nav-divider-color':
              theme.palette.neutral[200],
            '--nav-border-color': theme.palette.divider,
            '--nav-logo-border':
              theme.palette.neutral[200],
            '--nav-section-title-color':
              theme.palette.neutral[500],
            '--nav-item-color':
              theme.palette.neutral[500],
            '--nav-item-hover-bg':
              theme.palette.action.hover,
            '--nav-item-active-bg':
              theme.palette.action.selected,
            '--nav-item-active-color':
              theme.palette.text.primary,
            '--nav-item-disabled-color':
              theme.palette.neutral[400],
            '--nav-item-icon-color':
              theme.palette.neutral[400],
            '--nav-item-icon-active-color':
              theme.palette.primary.main,
            '--nav-item-icon-disabled-color':
              theme.palette.neutral[400],
            '--nav-item-chevron-color':
              theme.palette.neutral[400],
            '--nav-scrollbar-color':
              theme.palette.neutral[900],
          };
        }

      case 'evident':
        if (theme.palette.mode === 'dark') {
          return {
            '--nav-bg': theme.palette.neutral[800],
            '--nav-color': theme.palette.common.white,
            '--nav-divider-color':
              theme.palette.neutral[700],
            '--nav-border-color': 'transparent',
            '--nav-logo-border':
              theme.palette.neutral[700],
            '--nav-item-color':
              theme.palette.neutral[400],
            '--nav-item-hover-bg':
              'rgba(255, 255, 255, 0.04)',
            '--nav-item-active-bg':
              'rgba(255, 255, 255, 0.04)',
            '--nav-item-active-color':
              theme.palette.common.white,
            '--nav-item-disabled-color':
              theme.palette.neutral[500],
            '--nav-item-icon-color':
              theme.palette.neutral[400],
            '--nav-item-icon-active-color':
              theme.palette.primary.main,
            '--nav-item-icon-disabled-color':
              theme.palette.neutral[500],
            '--nav-item-chevron-color':
              theme.palette.neutral[600],
            '--nav-scrollbar-color':
              theme.palette.neutral[400],
          };
        } else {
          return {
            '--nav-bg': theme.palette.neutral[800],
            '--nav-color': theme.palette.common.white,
            '--nav-divider-color':
              theme.palette.neutral[700],
            '--nav-border-color': 'transparent',
            '--nav-logo-border':
              theme.palette.neutral[700],
            '--nav-item-color':
              theme.palette.neutral[400],
            '--nav-item-hover-bg':
              'rgba(255, 255, 255, 0.04)',
            '--nav-item-active-bg':
              'rgba(255, 255, 255, 0.04)',
            '--nav-item-active-color':
              theme.palette.common.white,
            '--nav-item-disabled-color':
              theme.palette.neutral[500],
            '--nav-item-icon-color':
              theme.palette.neutral[400],
            '--nav-item-icon-active-color':
              theme.palette.primary.main,
            '--nav-item-icon-disabled-color':
              theme.palette.neutral[500],
            '--nav-item-chevron-color':
              theme.palette.neutral[600],
            '--nav-scrollbar-color':
              theme.palette.neutral[400],
          };
        }

      default:
        return {};
    }
  }, [theme, color]);
};
