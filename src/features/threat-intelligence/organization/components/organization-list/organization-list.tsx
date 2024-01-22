import { Chip, Link } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

import {
  DataGrid,
  DeleteModal,
  OverflowTip,
  SeverityPill,
} from '@/components/share-components';
import { RouterLink } from '@/components/util-components';
import {
  useColumnAction,
  useDateFormat,
  useDialog,
} from '@/hooks';

import data from './mock-data.json';

export const OrganizationList = () => {
  const { format } = useDateFormat();
  const deleteDialog = useDialog();

  const columnActions = useColumnAction({
    usages: ['delete'],
    onAction: {
      delete: () => deleteDialog.handleOpen(),
    },
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
      minWidth: 250,
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
      field: 'type',
      headerName: 'Type',
      flex: 1,
      sortable: false,
      minWidth: 150,
      renderCell: ({ value }) => (
        <Chip
          label={value}
          color="primary"
          variant="outlined"
        />
      ),
    },
    {
      field: 'tag',
      headerName: 'Tag',
      flex: 1,
      sortable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ value }) => value.length,
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      sortable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ value }) => (
        <SeverityPill
          color={value === 'enable' ? 'success' : 'error'}
        >
          {value}
        </SeverityPill>
      ),
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
    columnActions,
  ];

  return (
    <>
      <DataGrid
        getRowId={(row) => row.name}
        getRowHeight={() => 'auto'}
        autoHeight
        rows={data.data}
        columns={columns}
      />

      <DeleteModal
        open={deleteDialog.open}
        handleClose={deleteDialog.handleClose}
      />
    </>
  );
};
