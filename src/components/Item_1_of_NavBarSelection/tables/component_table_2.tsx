import React from "react"
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  RowData,
} from "@tanstack/react-table";




const defaultColumn: Partial<ColumnDef<any>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    if (id === "Adj") {
      const initialValue = getValue();
      const [value, setValue] = React.useState(initialValue);
      const handleChange = (e) => {
        let newValue = e.target.value;
        if (newValue === '') {
          newValue = '0'; 
        }
        setValue(newValue);

        table.options.meta?.updateData(index, id, newValue);
      };

      React.useEffect(() => {
        setValue(initialValue);
      }, [initialValue]);

      return (
        <input
          value={value}
          onChange={handleChange}
          // onBlur={onBlur}
          type="number"
          step="0.01"
          className="text-center"
        />
      );
    } else {
      return <span>{getValue()}</span>;
    }
  },
};

export function Table_2({ mockData, onUpdateData }) {
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      { accessorKey: "date", size: 200 },
      { accessorKey: "SoD", size: 200 },
      { accessorKey: "Adj", size: 200 },
      { accessorKey: "Current", size: 200 },
    ],
    []
  );

  const table = useReactTable({
    data: mockData,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: mockData.length,
      },
    },
    meta: {
      updateData: (rowIndex, columnId, value) => {
        const updatedData = [...mockData];
        updatedData[rowIndex][columnId] = parseFloat(value);
    
        updatedData[rowIndex].Current = (updatedData[rowIndex].SoD + updatedData[rowIndex].Adj).toFixed(2);
    
        onUpdateData(updatedData); 
      },
    },
    debugTable: false,
  });

  return (
    <div className="flex flex-col h-dvh max-w-4xl py-10 ">
      <table className="border">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b text-gray-800">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="px-4 pr-2 py-4 font-medium text-center"
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
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
                <td
                  key={cell.id}
                  style={{ width: cell.column.getSize() }}
                  className="px-0.5 pt-[4px] pb-[4px]"
                >
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