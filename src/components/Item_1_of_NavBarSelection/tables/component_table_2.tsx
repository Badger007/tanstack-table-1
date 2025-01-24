import React from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  RowData,
} from "@tanstack/react-table";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
  }
}

type Crude_Table = {
  date: String;
  SoD: number;
  Const: number;
  Spread: number;
};

const defaultColumn: Partial<ColumnDef<Crude_Table>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    if (id === "Const") {
      const initialValue = getValue();
      const [value, setValue] = React.useState(initialValue);
      const [isNumeric, setIsNumeric] = React.useState(true);

      const onBlur = () => {
        table.options.meta?.updateData(index, id, value);
        // table.options.meta?.onUpdateData(table.getData()); // Call the update handler
      };

      const handleChange = (e) => {
        const newValue = e.target.value;
        const isValidNumber = /^-?\d*\.?\d{0,3}$/.test(newValue); // Regular expression to check for valid numbers with up to three decimal places
        if (isValidNumber || newValue === "") {
          setValue(newValue);
          setIsNumeric(true);
        } else {
          setIsNumeric(false);
        }
      };

      React.useEffect(() => {
        setValue(initialValue);
      }, [initialValue]);

      return (
        <input
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          className={`text-center ${
            isNumeric ? "" : "text-red-400 dark:text-sky-400 bg-red-50"
          }`}
        />
      );
    } else {
      return <span>{getValue()}</span>;
    }
  },
};

export function Table_2({ mockData, onUpdateData }) {
  const columns = React.useMemo<ColumnDef<Crude_Table>[]>(
    () => [
      { accessorKey: "date", size: 200 },
      { accessorKey: "SoD", size: 200 },
      { accessorKey: "Const", size: 200 },
      { accessorKey: "Spread", size: 200 },
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
        updatedData[rowIndex][columnId] = value;
        onUpdateData(updatedData); // Update the parent component's state
      },
    },
    debugTable: false,
  });

  return (
    <div className="flex flex-col h-dvh max-w-4xl py-10 pl-10">
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