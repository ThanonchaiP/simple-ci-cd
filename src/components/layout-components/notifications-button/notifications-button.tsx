import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import type { FC } from 'react';

import { usePopover } from '@/hooks';

export const NotificationsButton: FC = () => {
  const popover = usePopover<HTMLButtonElement>();

  return (
    <>
      <Tooltip title="Notifications">
        <IconButton
          ref={popover.anchorRef}
          onClick={popover.handleOpen}
        >
          <Badge color="error" badgeContent={2}>
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
      </Tooltip>
    </>
  );
};
