import { Card, Link, Switch } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

import {
  DataGrid,
  SeverityPill,
  OverflowTip,
} from '@/components/share-components';
import { RouterLink } from '@/components/util-components';
import { useColumnAction, useDateFormat } from '@/hooks';

import { data } from './mock-data';

export const RuleList = () => {
  const { format } = useDateFormat();

  const columnActions = useColumnAction({
    usages: ['edit', 'delete'],
  });

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 200,
      maxWidth: 300,
      sortable: false,
      renderCell: ({ value }) => {
        return (
          <Link component={RouterLink} href="/">
            {value}
          </Link>
        );
      },
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
      minWidth: 270,
      sortable: false,
      renderCell: ({ value }) => (
        <OverflowTip
          text={value}
          typographyProps={{
            variant: 'body2',
            sx: {
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            },
          }}
        />
      ),
    },
    {
      field: 'severity',
      headerName: 'Severity',
      flex: 1,
      maxWidth: 150,
      align: 'center',
      sortable: false,
      headerAlign: 'center',
      renderCell: ({ value }) => {
        return (
          <SeverityPill color={value.toLowerCase()}>
            {value}
          </SeverityPill>
        );
      },
    },
    {
      field: 'created_date',
      headerName: 'Created Date',
      minWidth: 150,
      sortable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ value }) => format(value),
    },
    {
      field: 'updated_date',
      headerName: 'Updated Date',
      minWidth: 150,
      sortable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ value }) => format(value),
    },
    {
      field: 'enabled',
      headerName: 'Rule Status',
      flex: 1,
      maxWidth: 130,
      sortable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: () => (
        <Switch
          defaultChecked
          sx={{ marginTop: '-7px' }}
        />
      ),
    },
    columnActions,
  ];

  return (
    <Card>
      <DataGrid
        columns={columns}
        rows={data}
        autoHeight
        getRowHeight={() => 'auto'}
        sx={{
          '& .MuiDataGrid-cell': {
            alignItems: 'start',
            px: 2,
            py: 2,
          },
        }}
      />
    </Card>
  );
};
