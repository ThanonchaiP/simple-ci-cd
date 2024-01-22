import {
  DataGrid as MuiDataGrid,
  type DataGridProps,
} from '@mui/x-data-grid';

import { NoRowsOverlay } from './no-rows-overlay';

export const DataGrid = ({
  sx,
  slots,
  ...props
}: DataGridProps) => {
  return (
    <MuiDataGrid
      slots={{
        columnMenu: () => null,
        noRowsOverlay: () => <NoRowsOverlay />,
        ...slots,
      }}
      sx={{
        '& .MuiDataGrid-row': {
          '& .MuiDataGrid-withBorderColor': {
            borderBottom: '1px solid',
            borderColor: 'divider',
          },
        },
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        '& .MuiDataGrid-columnHeaders': {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          '& .MuiDataGrid-columnHeader': {
            px: 2,
          },
        },
        '& .MuiDataGrid-columnHeaderTitle': {
          textTransform: 'uppercase',
        },
        '& .MuiDataGrid-cell': {
          px: 2,
          py: 2,
        },
        '& .MuiDataGrid-cell:focus ,.MuiDataGrid-columnHeader:focus ,.MuiDataGrid-columnHeader:focus-within ,.MuiDataGrid-cell:focus-within':
          {
            outline: 'none',
          },
        ...sx,
      }}
      initialState={{
        pagination: {
          paginationModel: { pageSize: 10 },
        },
      }}
      pageSizeOptions={[10]}
      disableColumnMenu={true}
      checkboxSelection={false}
      disableRowSelectionOnClick
      getRowId={(row) => row.id}
      {...props}
    />
  );
};
