import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import type { Theme } from '@mui/material/styles/createTheme';
import SvgIcon from '@mui/material/SvgIcon';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha } from '@mui/system/colorManipulator';
import PropTypes from 'prop-types';
import type { FC } from 'react';

import { AccountButton } from '../account-button';
import { ContactsButton } from '../contacts-button';
import { LanguageSwitch } from '../language-switch';
import { NotificationsButton } from '../notifications-button';
import { SearchButton } from '../search-button';

const TOP_NAV_HEIGHT = 64;
const SIDE_NAV_WIDTH = 280;

interface TopNavProps {
  onMobileNavOpen?: () => void;
}

export const TopNav: FC<TopNavProps> = (props) => {
  const { onMobileNavOpen, ...other } = props;
  const lgUp = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up('lg')
  );

  return (
    <Box
      component="header"
      sx={{
        backdropFilter: 'blur(6px)',
        backgroundColor: (theme) =>
          alpha(theme.palette.background.default, 0.8),
        position: 'sticky',
        left: {
          lg: `${SIDE_NAV_WIDTH}px`,
        },
        top: 0,
        width: {
          lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
        },
        zIndex: (theme) => theme.zIndex.appBar,
      }}
      {...other}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          px: 2,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
        >
          {!lgUp && (
            <IconButton onClick={onMobileNavOpen}>
              <SvgIcon>
                <MenuIcon />
              </SvgIcon>
            </IconButton>
          )}
          <SearchButton />
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
    </Box>
  );
};

TopNav.propTypes = {
  onMobileNavOpen: PropTypes.func,
};