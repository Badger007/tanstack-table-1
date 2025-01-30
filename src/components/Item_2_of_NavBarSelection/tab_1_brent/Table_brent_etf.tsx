import React from "react";
import { Table_template_2 } from "../table_template_experimental.tsx";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

const defaultColumn: Partial<ColumnDef<any>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    if (id === "current") {
      const initialValue = getValue();
      const [value, setValue] = React.useState(initialValue);
      const onBlur = () => {
        table.options.meta?.updateData(index, id, value);
      };

      const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
      };

      React.useEffect(() => {
        setValue(initialValue);
      }, [initialValue]);

      return (
        <input
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          type="number"
          step="0.01"
          className="text-center"
          style={{ width: '100%', textAlign: 'center' }}
        />
      );
    } else {
      return <span>{getValue()}</span>;
    }
  },
};

export const Table_brent_etf = ({ tableData, onUpdateData }) => {
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      { accessorKey: "month", size: 100 },
      { accessorKey: "eod", size: 100 },
      { accessorKey: "current", size: 100 },
      { accessorKey: "change", size: 100 },
    ],
    []
  );

  const table = useReactTable({
    data: tableData,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: tableData.length,
      },
    },
    meta: {
      updateData: (rowIndex, columnId, value) => {
        const updatedData = [...tableData];
        updatedData[rowIndex][columnId] = value;
        onUpdateData(updatedData);
      },
    },
    debugTable: false,
  });

  return (
    <div>
      <div className="flex-grow">
        <Table_template_2 mockData={tableData} onUpdateData={onUpdateData} columns={columns} table={table} table_name="ETF" />
      </div>
    </div>
  );
};
