// import { useState } from "react";
// import { Table_template_2 } from "./table_template_experimental.tsx";
// import {downloadCSV} from "../helpers/functions.tsx"
// import React from "react";

// import {
//     ColumnDef,
//     useReactTable,
//     getCoreRowModel,
//     getPaginationRowModel,
//   } from "@tanstack/react-table";


//   const datedDataInitial = Array.from({ length: 7 }, (_, index) => ({
//     week: `week ${index + 1}`,
//     eod: (Math.random() * 100).toFixed(2),
//     current: (Math.random() * 100).toFixed(2),
//     change: (Math.random() * 10).toFixed(2),
//   }));
  

//   const defaultColumn: Partial<ColumnDef<any>> = {
//     cell: ({ getValue, row: { index }, column: { id }, table }) => {
//       if (id === "current") {
//         const initialValue = getValue();
//         const [value, setValue] = React.useState(initialValue);
//         const onBlur = () => {
//           table.options.meta?.updateData(index, id, value);
//         };
  
//         const handleChange = (e) => {
//           const newValue = e.target.value;
//           setValue(newValue);
//         };
  
//         React.useEffect(() => {
//           setValue(initialValue);
//         }, [initialValue]);
  
//         return (
//           <input
//             value={value}
//             onChange={handleChange}
//             onBlur={onBlur}
//             type="number"
//             step="0.01"
//             className="text-center"
            
//             style={{ width: '100%', textAlign: 'center' }}
//           />
//         );
//       } else {
//         return <span>{getValue()}</span>;
//       }
//     },
//   };



//   export const Table_brent_dated = () => {
//     const [tableData, setTableData] = useState(datedDataInitial); 
//     const handleUpdateData = (newData) => {
//       setTableData(newData); 
//     };
  
  
//   const columns = React.useMemo<ColumnDef<any>[]>(
//       () => [
//         { accessorKey: "week", size: 100 },
//         { accessorKey: "eod", size: 100 },
//         { accessorKey: "current", size: 100 },
//         { accessorKey: "change", size: 100 },
//       ],
//       []
//     );
  
//     const table = useReactTable({
//       data: datedDataInitial,
//       columns,
//       defaultColumn,
//       getCoreRowModel: getCoreRowModel(),
//       getPaginationRowModel: getPaginationRowModel(),
//       initialState: {
//         pagination: {
//           pageSize: datedDataInitial.length,
//         },
//       },
//       meta: {
//         updateData: (rowIndex, columnId, value) => {
//           const updatedData = [...datedDataInitial];
//           updatedData[rowIndex][columnId] = value;
//           handleUpdateData(updatedData); 
//         },
//       },
//       debugTable: false,
//     });
  
  
//     return (
//       <>
  
//         <div >
//           <div className="flex-grow">
//             <Table_template_2 mockData={tableData} onUpdateData={handleUpdateData} columns={columns} table={table} table_name="Dated"/> 
//           </div>
//           <div className="flex  h-dvh max-w-4xl  ">
//             <button 
//               className="px-8 py-2 bg-blue-500 text-white rounded"
//               onClick={() => downloadCSV(tableData)} 
//             >
//               Update Values
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   };


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


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

export const Table_brent_dated = ({ tableData, onUpdateData }) => {
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      { accessorKey: "week", size: 100 },
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
        <Table_template_2 mockData={tableData} onUpdateData={onUpdateData} columns={columns} table={table} table_name="Dated" />
      </div>
    </div>
  );
};
