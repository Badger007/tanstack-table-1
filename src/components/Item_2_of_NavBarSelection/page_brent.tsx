import React, { useState } from 'react';
import {downloadCSV} from "../helpers/functions.tsx"
import Table_1 from "./page_brent_child_table_1.tsx"


// import { Dropdown_list } from "../Item_1_of_NavBarSelection/dropdown_filter/component_dropdown_with_table_as_child_2.tsx";
// import {
//   dummy_murban,
//   dummy_dubai,
//   dummy_wti,
//   dummy_brent,
// } from "../data_input/dummy_data_1.tsx";

import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

// const brentData = Array.from({ length: 10 }, (_, index) => ({
//   spread: `Spread ${index + 1}`,
//   eod: (Math.random() * 100).toFixed(2),
//   current: (Math.random() * 100).toFixed(2),
//   change: (Math.random() * 10).toFixed(2),
// }));

const datedData = Array.from({ length: 7 }, (_, index) => ({
  week: `Week ${index + 1}`,
  eod: (Math.random() * 100).toFixed(2),
  current: (Math.random() * 100).toFixed(2),
  change: (Math.random() * 10).toFixed(2),
}));

const etfData = Array.from({ length: 3 }, (_, index) => ({
  month: `Month ${index + 1}`,
  eod: (Math.random() * 100).toFixed(2),
  current: (Math.random() * 100).toFixed(2),
  change: (Math.random() * 10).toFixed(2),
}));

// const columnsBrent = [
//   { accessorKey: 'spread', header: 'Spread' },
//   { accessorKey: 'eod', header: 'EOD' },
//   {
//     accessorKey: 'current',
//     header: 'Current',
//     cell: ({ row }) => {
//       const [currentValue, setCurrentValue] = useState(row.getValue('current'));
//       return (
//         <input
//           type="number"
//           step="0.01"
//           value={currentValue}
//           onChange={(e) => {
//             const newValue = e.target.value;
//             setCurrentValue(newValue);
//             row.getTable().setData((oldData) => {
//               const newData = [...oldData];
//               newData[row.index].current = newValue; // Update the current value
//               return newData;
//             });
//           }}
//           style={{ width: '60%', textAlign: 'center' }} // Adjusted width to 50%
//         />
//       );
//     },
//   },
//   { accessorKey: 'change', header: 'Change' },
// ];

const columnsDated = [
  { accessorKey: 'week', header: 'Week' },
  { accessorKey: 'eod', header: 'EOD' },
  {
    accessorKey: 'current',
    header: 'Current',
    cell: ({ row }) => {
      const [currentValue, setCurrentValue] = useState(row.getValue('current'));
      return (
        <input
          type="number"
          step="0.01"
          value={currentValue}
          onChange={(e) => {
            const newValue = e.target.value;
            setCurrentValue(newValue);
            row.getTable().setData((oldData) => {
              const newData = [...oldData];
              newData[row.index].current = newValue; // Update the current value
              return newData;
            });
          }}
          style={{ width: '60%', textAlign: 'center' }} // Center the input
        />
      );
    },
  },
  { accessorKey: 'change', header: 'Change' },
];

const columnsEtf = [
  { accessorKey: 'month', header: 'Month' },
  { accessorKey: 'eod', header: 'EOD' },
  {
    accessorKey: 'current',
    header: 'Current',
    cell: ({ row }) => {
      const [currentValue, setCurrentValue] = useState(row.getValue('current'));
      return (
        <input
          type="number"
          step="0.01"
          value={currentValue}
          onChange={(e) => {
            const newValue = e.target.value;
            setCurrentValue(newValue);
            row.getTable().setData((oldData) => {
              const newData = [...oldData];
              newData[row.index].current = newValue; // Update the current value
              return newData;
            });
          }}
          style={{ width: '100%', textAlign: 'center' }} // Center the input
        />
      );
    },
  },
  { accessorKey: 'change', header: 'Change' },
];

const MyTables = () => {
  // const brentTable = useReactTable({
  //   data: brentData,
  //   columns: columnsBrent,
  //   getCoreRowModel: getCoreRowModel(),
  // });

  const datedTable = useReactTable({
    data: datedData,
    columns: columnsDated,
    getCoreRowModel: getCoreRowModel(),
  });

  const etfTable = useReactTable({
    data: etfData,
    columns: columnsEtf,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      {/* Left Side: Brent F2B Spreads Table */}
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <Table_1 />
      </div>

      {/* Right Side: Dated and ETF Tables */}
      <div style={{ flex: 1, paddingLeft: '20px', borderLeft: '1px solid #ddd' }}>
        <div style={{ marginBottom: '20px' }}>
          <h3 className="font-medium text-center">Dated</h3>
          <table className="border" style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '600px', tableLayout: 'auto' }}>
            <thead>
              {datedTable.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id} className="border-b text-gray-800">
                  {headerGroup.headers.map(header => (
                    <th key={header.id} colSpan={header.colSpan} className="px-4 pr-2 py-4 font-medium text-center">
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(header.column.columnDef.header, header.getContext())}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {datedTable.getRowModel().rows.map(row => (
                <tr key={row.id} className="border-b text-center">
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} style={{ padding: '8px' }}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="font-medium text-center">ETF</h3>
          <table className="border" style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '600px', tableLayout: 'auto' }}>
            <thead>
              {etfTable.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id} className="border-b text-gray-800">
                  {headerGroup.headers.map(header => (
                    <th key={header.id} colSpan={header.colSpan} className="px-4 pr-2 py-4 font-medium text-center">
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(header.column.columnDef.header, header.getContext())}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {etfTable.getRowModel().rows.map(row => (
                <tr key={row.id} className="border-b text-center">
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} style={{ padding: '8px' }}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="py-5">
          <button 
            className="px-8 py-2 bg-blue-500 text-white rounded w-50"
            onClick={() => {downloadCSV(datedData, "dated"), downloadCSV(etfData, "etf")}} // Use the updated table data
          >
            Update Values
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MyTables;
