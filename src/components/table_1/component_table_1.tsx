//https://medium.com/@jordammendes/build-powerfull-tables-in-reactjs-with-tanstack-9d57a3a63e35

import * as React from 'react';

// import mockData from './data.json';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  // getSortedRowModel,
  // SortingState,
  getPaginationRowModel,
} from '@tanstack/react-table';

type Crude_Table = {
  date: String;
  SoD: number;
  Const: number;
  Spread: number;
};

const columnHelper = createColumnHelper<Crude_Table>();

const columns = [
  columnHelper.accessor('date', {
    cell: (info) => info.getValue(),
    size: 200,
  }),
  columnHelper.accessor('SoD', {
    cell: (info) => info.getValue(),
    size: 200,
    
  }),
  columnHelper.accessor((row) => row.Const, {
    id: 'Const',
    cell: (info) => info.getValue(),
    size: 200,
  }),
  columnHelper.accessor('Spread', {
    header: () => 'Spread',
    cell: (info) => info.getValue(),
    size: 200,
  }),
];

export const Table_1 = (props) => {
  // const [data] = React.useState(() => [...props.mockData]);
  
  const [data] = [props.mockData];
  // console.log(props.mockData[0].date)

  // const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,

    initialState: {
      pagination: {
        pageSize: props.mockData.length,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    // onSortingChange: setSorting,
    // getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
      <div className="flex flex-col h-dvh max-w-4xl py-10 pl-10">
        {/* <div className="h-2" /> */}
        <table className="border">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}
              className="border-b text-gray-800">
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} 
                    colSpan={header.colSpan}
                    className="px-4 pr-2 py-4 font-medium text-center">
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody >
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className="border-b text-center"> 
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id } 
                      style={{ width: cell.column.getSize() }}
                      className="px-0.5 pt-[4px] pb-[4px]">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                      
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }