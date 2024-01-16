'use client';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Link,
  Switch,
  Tooltip,
  Typography,
} from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

import { ColumnAction } from '@/components/share-components/column-action';
import { DataGrid } from '@/components/share-components/data-grid';
import { PageHeader } from '@/components/share-components/page-header';
import { SeverityPill } from '@/components/share-components/severity-pill';
import { RouterLink } from '@/components/util-components/router-link';

import { data } from './mock-data';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    minWidth: 200,
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
      <Tooltip
        title={value}
        placement="bottom-start"
        disableHoverListener={value.length < 115}
      >
        <Typography
          variant="body2"
          sx={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          {value}
        </Typography>
      </Tooltip>
    ),
  },
  {
    field: 'severity',
    headerName: 'Severity',
    flex: 1,
    minWidth: 150,
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
  },
  {
    field: 'updated_date',
    headerName: 'Updated Date',
    minWidth: 150,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'enabled',
    headerName: 'Rule Status',
    flex: 1,
    minWidth: 150,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    renderCell: () => <Switch defaultChecked />,
  },
  {
    field: 'action',
    headerName: 'Action',
    flex: 1,
    minWidth: 100,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    type: 'date',
    renderCell: () => (
      <ColumnAction
        menuItem={[
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
        ]}
      />
    ),
  },
];

const rows = data;

const DetectionRulePage = () => {
  return (
    <>
      <PageHeader title="Detection Rule" />

      <DataGrid
        columns={columns}
        rows={rows}
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
    </>
  );
};

export default DetectionRulePage;
