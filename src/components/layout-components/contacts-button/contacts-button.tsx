import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import type { FC } from 'react';

import { usePopover } from '@/hooks/use-popover';

export const ContactsButton: FC = () => {
  const popover = usePopover<HTMLButtonElement>();

  return (
    <>
      <Tooltip title="Contacts">
        <IconButton
          onClick={popover.handleOpen}
          ref={popover.anchorRef}
        >
          <SvgIcon>
            <PermIdentityIcon />
          </SvgIcon>
        </IconButton>
      </Tooltip>
    </>
  );
};
