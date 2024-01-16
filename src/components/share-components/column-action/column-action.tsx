import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import { ReactNode, useState } from 'react';

type Item = {
  key: string;
  icon?: ReactNode;
  label: string | ReactNode;
  onClick?: () => void;
};

type ColumnActionProps = {
  menuItem?: Item[];
};

export const ColumnAction = ({
  menuItem,
}: ColumnActionProps) => {
  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="action"
        id="action-button"
        aria-controls={open ? 'action-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="action-menu"
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
        onClose={handleClose}
      >
        {menuItem &&
          menuItem.map((item) => (
            <MenuItem
              onClick={item.onClick}
              key={item.key}
            >
              {item.icon && (
                <ListItemIcon sx={{ mr: 0 }}>
                  {item.icon}
                </ListItemIcon>
              )}

              <ListItemText
                sx={{ span: { fontSize: '0.9rem' } }}
              >
                {item.label}
              </ListItemText>
            </MenuItem>
          ))}
      </Menu>
    </>
  );
};
