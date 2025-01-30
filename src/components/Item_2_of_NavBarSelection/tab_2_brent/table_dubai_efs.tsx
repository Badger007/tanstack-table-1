import { useState } from "react";
import { Table_template_2 } from "../table_template_experimental.tsx";
import {downloadCSV} from "../../helpers/functions.tsx"
import React from "react";

import {
    ColumnDef,
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
  } from "@tanstack/react-table";



  const dummy_efs = 
      Array.from({ length: 1 }, (_, index) => ({
        month: `month ${index + 1}`,
        value: (Math.random() * 100).toFixed(2),
        // current: (Math.random() * 100).toFixed(2),
        // change: (Math.random() * 10).toFixed(2),
      }))




const defaultColumn: Partial<ColumnDef<any>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    if (id === "value") {
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

export const Table_dubai_efs_with_button = () => {
  const [tableData, setTableData] = useState(dummy_efs); 
  const handleUpdateData = (newData) => {
    setTableData(newData); 
  };


const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      { accessorKey: "month", size: 180 },
      { accessorKey: "value", size: 180 },
    //   { accessorKey: "current", size: 100 },
    //   { accessorKey: "change", size: 100 },
    ],
    []
  );

  const table = useReactTable({
    data: dummy_efs,
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
        const updatedData = [...dummy_efs];
        updatedData[rowIndex][columnId] = value;
        handleUpdateData(updatedData); 
      },
    },
    debugTable: false,
  });


  return (
    <>

      <div >
        <div className="flex-grow">
          <Table_template_2 mockData={tableData} onUpdateData={handleUpdateData} columns={columns} table={table} table_name="Dubai EFS"/> 
        </div>
        <div className="flex  h-dvh max-w-4xl  ">
          <button 
            className="px-8 py-2 bg-blue-500 text-white rounded"
            onClick={() => downloadCSV(tableData,"EFS")} 
          >
            Update Values
          </button>
        </div>
      </div>
    </>
  );
};