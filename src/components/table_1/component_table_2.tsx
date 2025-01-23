import React from "react";

//
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

      const onBlur = () => {
        table.options.meta?.updateData(index, id, value);
      };

      React.useEffect(() => {
        setValue(initialValue);
      }, [initialValue]);

      return (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={onBlur}
          className="text-center"
        />
      );
    } else {
      return <span>{getValue()}</span>;
    }
  },
};

export function Table_2(props) {
  const columns = React.useMemo<ColumnDef<Crude_Table>[]>(
    () => [
      {
        accessorKey: "date",
        size: 200,
        // minSize: 400
      },
      {
        accessorKey: "SoD",
        size: 200,
      },
      {
        accessorKey: "Const",
        size: 200,
      },
      {
        accessorKey: "Spread",
        size: 200,
        // minSize: 500
      },
    ],
    []
  );

  const [data] = [props.mockData];

  const table = useReactTable({
    data,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: data.length,
      },
    },

    debugTable: false,
  });

  return (
    <div className="flex flex-col h-dvh max-w-4xl py-10 pl-10">
      {/* <div className="h-2" /> */}
      <table className="border">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b text-gray-800">
              {headerGroup.headers.map((header) => {
                return (
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
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} className="border-b text-center">
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      style={{ width: cell.column.getSize() }}
                      className="px-0.5 pt-[4px] pb-[4px]"
                    >
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
