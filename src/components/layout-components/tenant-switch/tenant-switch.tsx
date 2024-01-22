import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { SxProps } from '@mui/system/styleFunctionSx';
import PropTypes from 'prop-types';
import type { FC } from 'react';

import { usePathname, usePopover } from '@/hooks';

import { TenantPopover } from './tenant-popover';

interface TenantSwitchProps {
  sx?: SxProps;
}

export const TenantSwitch: FC<TenantSwitchProps> = (
  props
) => {
  const popover = usePopover<HTMLButtonElement>();
  const pathname = usePathname();

  const currentModule = pathname.split('/')?.[3] ?? '';
  const currentApp = pathname.split('/')?.[2] ?? '';

  const getModule = (module: string): string => {
    switch (module) {
      case 'log-management':
        return 'LM';
      case 'siem':
        return 'SIEM';
      case 'threat-intelligence':
        return 'CTI';
      default:
        return 'Modules';
    }
  };

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
            {getModule(currentModule)}
          </Typography>
        </Box>

        {pathname.split('/')?.[3] && (
          <IconButton
            onClick={popover.handleOpen}
            ref={popover.anchorRef}
          >
            <KeyboardArrowDownIcon
              sx={{ fontSize: 16 }}
            />
          </IconButton>
        )}
      </Stack>

      <TenantPopover
        anchorEl={popover.anchorRef.current}
        onClose={popover.handleClose}
        open={popover.open}
        currentApp={currentApp}
      />
    </>
  );
};

TenantSwitch.propTypes = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  sx: PropTypes.object,
};
