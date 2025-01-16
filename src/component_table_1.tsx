//https://medium.com/@jordammendes/build-powerfull-tables-in-reactjs-with-tanstack-9d57a3a63e35

import * as React from 'react';

import mockData from './data.json';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  // getSortedRowModel,
  // SortingState,
  getPaginationRowModel,
} from '@tanstack/react-table';

type Person = {
  date: String;
  SoD: number;
  Const: number;
  Spread: number;
};

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('date', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('SoD', {
    cell: (info) => info.getValue(),
    
  }),
  columnHelper.accessor((row) => row.Const, {
    id: 'Const',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Const</span>,
  }),
  columnHelper.accessor('Spread', {
    header: () => 'Spread',
    cell: (info) => info.renderValue(),
  }),
];

export default function component_1() {
  const [data] = React.useState(() => [...mockData]);
  // const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      // sorting,
    },
    initialState: {
      pagination: {
        pageSize: mockData.length,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    // onSortingChange: setSorting,
    // getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="flex flex-col h-dvh max-w-2xl py-10 pl-10"> 
      <table className="border">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="border-b text-gray-800 uppercase"
              
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 pr-2 py-4 font-medium text-center"
                >
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        // className: header.column.getCanSort()
                        //   ? 'cursor-pointer select-none flex min-w-[36px]'
                        //   : '',
                        // onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {/* {{
                        asc: <span className="pl-2">↑</span>,
                        desc: <span className="pl-2">↓</span>,
                      }[header.column.getIsSorted() as string] ?? null} */}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b text-center">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-0.5 pt-[4px] pb-[4px]">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

 
    </div>
  );
}
