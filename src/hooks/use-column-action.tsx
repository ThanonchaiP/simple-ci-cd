import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Stack } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { ReactNode } from 'react';

import { ColumnAction } from '@/components/share-components';
import { RouterLink } from '@/components/util-components';

const actionItems = [
  {
    key: 'edit',
    label: 'Edit',
    icon: <EditIcon />,
  },
  {
    key: 'duplicate',
    label: 'Duplicate',
    icon: <ContentCopyIcon />,
  },
  {
    key: 'delete',
    label: 'Delete',
    icon: <DeleteIcon />,
  },
];

type Item = {
  key: string;
  icon?: ReactNode;
  label: string | ReactNode;
  onClick?: () => void;
};

type UseColumnAction<T> = {
  usages: Array<'edit' | 'duplicate' | 'delete'>;
  onAction?: Record<string, (dataSource: T) => void>;
};

export const useColumnAction = <
  T extends Record<string, unknown>,
>({
  usages,
  onAction,
}: UseColumnAction<T>): GridColDef => {
  const getItems = (dataSource: T) =>
    usages.map((usage) => {
      const item = actionItems.find(
        (item) => item.key === usage
      );

      return {
        ...item,
        key: item?.key ?? usage,
        onClick: () => onAction?.[usage]?.(dataSource),
      };
    });

  return {
    field: 'action',
    headerName: 'Action',
    flex: 1,
    maxWidth: 100,
    minWidth: 50,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    type: 'date',
    renderCell: ({ row }: { row: T }) => (
      <Stack direction="row" gap="4px">
        <ColumnAction
          menuItem={getItems(row) as Item[]}
        />
        <IconButton
          aria-label="action"
          id="action-button"
          sx={{ padding: 0 }}
          LinkComponent={RouterLink}
          href="/"
        >
          <ArrowForwardIcon />
        </IconButton>
      </Stack>
    ),
  };
};
