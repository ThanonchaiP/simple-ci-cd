import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { SxProps } from '@mui/system/styleFunctionSx';
import PropTypes from 'prop-types';
import type { FC } from 'react';

import { usePopover } from '@/hooks/use-popover';

import { TenantPopover } from './tenant-popover';

const tenants: string[] = ['Devias', 'Acme Corp'];

interface TenantSwitchProps {
  sx?: SxProps;
}

export const TenantSwitch: FC<TenantSwitchProps> = (
  props
) => {
  const popover = usePopover<HTMLButtonElement>();

  return (
    <>
      <Stack
        alignItems="center"
        direction="row"
        spacing={2}
        {...props}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography color="inherit" variant="h6">
            Web Portal
          </Typography>
          <Typography color="neutral.400" variant="body2">
            Modules
          </Typography>
        </Box>
        <IconButton
          onClick={popover.handleOpen}
          ref={popover.anchorRef}
        >
          <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </Stack>
      <TenantPopover
        anchorEl={popover.anchorRef.current}
        onChange={popover.handleClose}
        onClose={popover.handleClose}
        open={popover.open}
        tenants={tenants}
      />
    </>
  );
};

TenantSwitch.propTypes = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  sx: PropTypes.object,
};
