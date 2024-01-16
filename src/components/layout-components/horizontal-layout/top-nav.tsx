import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import type { Theme } from '@mui/material/styles/createTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';
import type { FC } from 'react';

import { Logo } from '@/components/util-components/logo';
import { RouterLink } from '@/components/util-components/router-link';
import { Scrollbar } from '@/components/util-components/scrollbar';
import { usePathname } from '@/hooks/use-pathname';
import { Section } from '@/types/navigation';
import type { NavColor } from '@/types/setting';

import { AccountButton } from '../account-button';
import { ContactsButton } from '../contacts-button';
import { LanguageSwitch } from '../language-switch';
import { NotificationsButton } from '../notifications-button';
import { TenantSwitch } from '../tenant-switch';

import { TopNavSection } from './top-nav-section';
import { useCssVars } from './use-css-vars';

interface TopNavProps {
  color?: NavColor;
  onMobileNav?: () => void;
  sections?: Section[];
}

export const TopNav: FC<TopNavProps> = (props) => {
  const {
    color = 'evident',
    onMobileNav,
    sections = [],
  } = props;

  const pathname = usePathname();
  const mdUp = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up('md')
  );
  const cssVars = useCssVars(color);

  return (
    <Box
      component="header"
      sx={{
        ...cssVars,
        backgroundColor: 'var(--nav-bg)',
        borderBottomColor: 'var(--nav-border-color)',
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        color: 'var(--nav-color)',
        left: 0,
        right: 0,
        position: 'sticky',
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          px: 3,
          py: '11px',
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
        >
          {!mdUp && sections.length > 0 && (
            <IconButton onClick={onMobileNav}>
              <MenuIcon />
            </IconButton>
          )}
          <Box
            component={RouterLink}
            href="/apps"
            sx={{
              borderColor: 'var(--nav-logo-border)',
              borderRadius: 1,
              borderStyle: 'solid',
              borderWidth: 1,
              display: 'inline-flex',
              height: 40,
              p: '4px',
              width: 40,
            }}
          >
            <Logo />
          </Box>
          <TenantSwitch />
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
        >
          <LanguageSwitch />
          <NotificationsButton />
          <ContactsButton />
          <AccountButton />
        </Stack>
      </Stack>
      {sections.length > 0 && mdUp && (
        <Box
          sx={{
            borderTopWidth: 1,
            borderTopStyle: 'solid',
            borderTopColor: 'var(--nav-divider-color)',
          }}
        >
          <Scrollbar
            sx={{
              '& .simplebar-scrollbar:before': {
                background: 'var(--nav-scrollbar-color)',
              },
            }}
          >
            <Stack
              alignItems="center"
              component="nav"
              direction="row"
              spacing={1}
              sx={{
                px: 2,
                py: 1.5,
              }}
            >
              {sections.map((section, index) => (
                <TopNavSection
                  items={section.items}
                  key={index}
                  pathname={pathname}
                  subheader={section.subheader}
                />
              ))}
            </Stack>
          </Scrollbar>
        </Box>
      )}
    </Box>
  );
};

TopNav.propTypes = {
  color: PropTypes.oneOf<NavColor>([
    'blend-in',
    'discrete',
    'evident',
  ]),
  onMobileNav: PropTypes.func,
  sections: PropTypes.array,
};
