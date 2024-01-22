import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import type { FC } from 'react';

import { usePopover } from '@/hooks';

export const ContactsButton: FC = () => {
  const popover = usePopover<HTMLButtonElement>();

  return (
    <>
      <Tooltip title="Contacts">
        <IconButton
          onClick={popover.handleOpen}
          ref={popover.anchorRef}
        >
          <PermIdentityIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};
