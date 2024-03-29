import CreditCardIcon from '@mui/icons-material/CreditCard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { RouterLink } from '@/components/util-components';
import { useRouter } from '@/hooks';
import { tokens } from '@/locales/tokens';

interface AccountPopoverProps {
  anchorEl: null | Element;
  open?: boolean;
  onClose?: () => void;
}

export const AccountPopover: FC<AccountPopoverProps> = (
  props
) => {
  const { anchorEl, onClose, open, ...other } = props;
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'bottom',
      }}
      disableScrollLock
      onClose={onClose}
      open={!!open}
      PaperProps={{ sx: { width: 200 } }}
      {...other}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="body1">
          Thanonchai Paliwong
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          cyber@log.com
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 1 }}>
        <ListItemButton
          component={RouterLink}
          href="/"
          onClick={onClose}
          sx={{
            borderRadius: 1,
            px: 1,
            py: 0.5,
          }}
        >
          <ListItemIcon>
            <PersonOutlineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                Profile
              </Typography>
            }
          />
        </ListItemButton>
        <ListItemButton
          component={RouterLink}
          href="/"
          onClick={onClose}
          sx={{
            borderRadius: 1,
            px: 1,
            py: 0.5,
          }}
        >
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                Settings
              </Typography>
            }
          />
        </ListItemButton>
        <ListItemButton
          component={RouterLink}
          href="/"
          onClick={onClose}
          sx={{
            borderRadius: 1,
            px: 1,
            py: 0.5,
          }}
        >
          <ListItemIcon>
            <CreditCardIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                Billing
              </Typography>
            }
          />
        </ListItemButton>
      </Box>
      <Divider sx={{ my: '0 !important' }} />
      <Box
        sx={{
          display: 'flex',
          p: 1,
          justifyContent: 'center',
        }}
      >
        <Button
          color="inherit"
          size="small"
          sx={{
            width: '100%',
          }}
          onClick={() => router.push('/auth/login')}
        >
          {t(tokens.common.logout)}
        </Button>
      </Box>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
