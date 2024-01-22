import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import PropTypes from 'prop-types';
import type { FC } from 'react';

import { RouterLink } from '@/components/util-components';
import { getApps } from '@/utils';

interface TenantPopoverProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open?: boolean;
  currentApp: string;
}

export const TenantPopover: FC<TenantPopoverProps> = (
  props
) => {
  const {
    anchorEl,
    onClose,
    open = false,
    currentApp,
    ...other
  } = props;

  const appItems = getApps(currentApp);

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
      keepMounted
      onClose={onClose}
      open={open}
      {...other}
    >
      {appItems.map((item) => (
        <MenuItem key={item.id}>
          <Typography
            component={RouterLink}
            href={item.path ?? '/apps'}
            scroll={false}
            onClick={onClose}
          >
            <Typography
              variant="subtitle2"
              sx={{
                maxWidth: 180,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {item.title}
            </Typography>
          </Typography>
        </MenuItem>
      ))}
    </Popover>
  );
};

TenantPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  currentApp: PropTypes.string.isRequired,
};
