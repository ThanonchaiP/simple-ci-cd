import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import type { FC } from 'react';

export const SearchButton: FC = () => {
  return (
    <>
      <Tooltip title="Search">
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};
