import { useState } from "react";
import { Table_template_2 } from "../table_template_experimental.tsx";
import { downloadCSV } from "../../helpers/functions.tsx";
import React from "react";

import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

const dummy_efs = Array.from({ length: 2 }, (_, index) => {
  const eod = Number((Math.random() * 100).toFixed(2));
  const current = Number((Math.random() * 100).toFixed(2));
  return {
    spread: `Spread ${index + 1}`,
    eod,
    current,
    change: (current - eod).toFixed(2),
  };
});

const defaultColumn: Partial<ColumnDef<any>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    if (id === "current") {
      const initialValue = getValue();
      const [value, setValue] = React.useState(initialValue);

      const handleChange = (e) => {
        let newValue = e.target.value;
        if (newValue === "") {
          newValue = "0";
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
          type="number"
          step="0.01"
          className="text-center"
          style={{ width: "100%", textAlign: "center" }}
        />
      );
    } else {
      return <span>{getValue()}</span>;
    }
  },
};

export const Table_dubai_efs_with_button = () => {
  const [tableData, setTableData] = useState(dummy_efs);

  const handleUpdateData = (newData) => {
    const updatedData = newData.map((row) => ({
      ...row,
      change: (row.current - row.eod).toFixed(2),
    }));
    setTableData(updatedData);
  };

  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      { accessorKey: "spread", size: 100 },
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
        pageSize: dummy_efs.length,
      },
    },
    meta: {
      updateData: (rowIndex, columnId, value) => {
        const updatedData = [...tableData];
        updatedData[rowIndex][columnId] = parseFloat(value);

        updatedData[rowIndex].change = (
          updatedData[rowIndex].current - updatedData[rowIndex].eod
        ).toFixed(2);
        handleUpdateData(updatedData);
      },
    },
    debugTable: false,
  });

  return (
    <>
      <div>
        <div className="flex-grow">
          <Table_template_2
            mockData={tableData}
            onUpdateData={handleUpdateData}
            columns={columns}
            table={table}
            table_name="Dubai EFS"
          />
        </div>
        <div className="flex  h-dvh max-w-4xl  ">
          <button
            className="px-8 py-2 bg-blue-500 text-white rounded"
            onClick={() => downloadCSV(tableData, "EFS")}
          >
            Update Values
          </button>
        </div>
      </div>
    </>
  );
};
