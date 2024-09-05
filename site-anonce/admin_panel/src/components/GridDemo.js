import * as React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const initialRows = [
  {
    id: 1,
    designation: 'Toyota',
    
  },
  {
    id: 2,
    designation: 'BMW',
    
  },
  {
    id: 3,
    designation: 'Audi',
  },
  
 
];

export default function GridDemo() {
  const [rows, setRows] = React.useState(initialRows);

  const deleteRow = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );

  const columns = React.useMemo(
    () => [
      { field: 'image', type: 'string' },
      { field: 'designation',  flex: 1, type: 'string',  },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteRow(params.id)}
          />,
        ],
      },
    ],
    [deleteRow],
  );

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid disableColumnMenu={true} columns={columns} rows={rows} />
    </div>
  );
}
