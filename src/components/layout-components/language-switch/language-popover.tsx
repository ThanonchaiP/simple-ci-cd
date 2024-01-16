import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import PropTypes from 'prop-types';
import type { FC } from 'react';

type Language = 'en' | 'de' | 'es';

type LanguageOptions = {
  [key in Language]: {
    icon: string;
    label: string;
  };
};

const languageOptions: LanguageOptions = {
  en: {
    icon: '/assets/flags/flag-uk.svg',
    label: 'English',
  },
  de: {
    icon: '/assets/flags/flag-de.svg',
    label: 'German',
  },
  es: {
    icon: '/assets/flags/flag-es.svg',
    label: 'Spanish',
  },
};

interface LanguagePopoverProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open?: boolean;
}

export const LanguagePopover: FC<LanguagePopoverProps> = (
  props
) => {
  const {
    anchorEl,
    onClose,
    open = false,
    ...other
  } = props;

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'bottom',
      }}
      disableScrollLock
      transformOrigin={{
        horizontal: 'right',
        vertical: 'top',
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 220 } }}
      {...other}
    >
      {(Object.keys(languageOptions) as Language[]).map(
        (language) => {
          const option = languageOptions[language];

          return (
            <MenuItem key={language}>
              <ListItemIcon>
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    '& img': {
                      width: '100%',
                    },
                  }}
                >
                  <Image
                    width={28}
                    height={28}
                    alt={option.label}
                    src={option.icon}
                  />
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="subtitle2">
                    {option.label}
                  </Typography>
                }
              />
            </MenuItem>
          );
        }
      )}
    </Popover>
  );
};

LanguagePopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
