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



  const dummy_platts_oman = 
      Array.from({ length: 3 }, (_, index) => ({
        spread: `spread ${index + 1}`,
        SoD: (Math.random() * 100).toFixed(2),
        current: (Math.random() * 100).toFixed(2),
        change: (Math.random() * 10).toFixed(2),
      }))




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

export const Table_platts_oman_with_button = () => {
  const [tableData, setTableData] = useState(dummy_platts_oman); 
  const handleUpdateData = (newData) => {
    setTableData(newData); 
  };


const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      { accessorKey: "spread", size: 200 },
      { accessorKey: "SoD", size: 200 },
      { accessorKey: "current", size: 100 },
      { accessorKey: "change", size: 100 },
    ],
    []
  );

  const table = useReactTable({
    data: dummy_platts_oman,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: dummy_platts_oman.length,
      },
    },
    meta: {
      updateData: (rowIndex, columnId, value) => {
        const updatedData = [...dummy_platts_oman];
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
          <Table_template_2 mockData={tableData} onUpdateData={handleUpdateData} columns={columns} table={table} table_name="Platts Oman"/> 
        </div>
        <div className="flex  h-dvh max-w-4xl  ">
          <button 
            className="px-8 py-2 bg-blue-500 text-white rounded"
            onClick={() => downloadCSV(tableData,"Platts Oman")} 
          >
            Update Values
          </button>
        </div>
      </div>
    </>
  );
};