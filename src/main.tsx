import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// import {dummy_murban, dummy_dubai, dummy_wti, dummy_brent} from './table_1/dummy_data_1.tsx';

// import React from "react";
// import ReactDOM from "react-dom/client";

// //
// import "./index.css";

// //
// import {
//   ColumnDef,
//   useReactTable,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   flexRender,
//   RowData,
// } from "@tanstack/react-table";
// import { makeData, Person } from "./marketData";

// declare module "@tanstack/react-table" {
//   interface TableMeta<TData extends RowData> {
//     updateData: (rowIndex: number, columnId: string, value: unknown) => void;
//   }
// }

// const defaultColumn: Partial<ColumnDef<Person>> = {
//   // size: 100, // Set a default column width
//   // minSize: 100, // Set a minimum width for resizing
//   // maxSize: 300, // Set a maximum width for resizing
//   cell: ({ getValue, row: { index }, column: { id }, table }) => {

    
    
//     if (id === 'firstName' || id === 'age') {
//       const initialValue = getValue();
//       const [value, setValue] = React.useState(initialValue);

//       const onBlur = () => {
//         table.options.meta?.updateData(index, id, value);
//       };

//       React.useEffect(() => {
//         setValue(initialValue);
//       }, [initialValue]);

//       return (

//         <input
//           value={value}
//           onChange={e => setValue(e.target.value)}
//           onBlur={onBlur}
//         />

//       );
//     } 
//     else {
    
//     return <span>{getValue()}</span>;
//     // return    <p>{getValue()}</p>    

//   }
//   },
  
// };


// function useSkipper() {
//   const shouldSkipRef = React.useRef(true);
//   const shouldSkip = shouldSkipRef.current;

//   // Wrap a function with this to skip a pagination reset temporarily
//   const skip = React.useCallback(() => {
//     shouldSkipRef.current = false;
//   }, []);

//   React.useEffect(() => {
//     shouldSkipRef.current = true;
//   });

//   return [shouldSkip, skip] as const;
// }

// function App() {

//   // const columns = React.useMemo<ColumnDef<Person>[]>(
//   //   () => [
//   //     {
//   //       accessorKey: "firstName",
//   //     },
//   //     {
//   //       accessorKey: "lastName",

//   //     },

//   //     {
//   //       accessorKey: "age",
//   //     },

//   //     {
//   //       accessorKey: "visits",
//   //     },
//   //     {
//   //       accessorKey: "status",
//   //     },
//   //     {
//   //       accessorKey: "progress",
//   //     },
//   //   ],
//   //   []
//   // );

//   const columns = React.useMemo<ColumnDef<Person>[]>(
//     () => [
//       {
//         accessorKey: "firstName",
//         size: 20, // Set a specific width for the column
//         minSize: 400
//       },
//       {
//         accessorKey: "lastName",
//         size: 150,
//       },
//       {
//         accessorKey: "age",
//         size: 50,
//       },
//       {
//         accessorKey: "visits",
//         size: 500,
//         minSize: 500
//       },
//       {
//         accessorKey: "status",
//         size: 150,
//       },
//       {
//         accessorKey: "progress",
//         size: 150,
//       },
//     ],
//     []
//   );


//   const [data, setData] = React.useState(() => makeData(1000));

//   const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();


//   const table = useReactTable({
//     data,
//     columns,
//     defaultColumn,
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     initialState: {
//       pagination: {
//         pageSize: data.length,
//       },
//     },
    
//     debugTable: false,
//   });

//   return (
//     <div className="p-2">
//       <div className="h-2" />
//       <table>
//         <thead>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header) => {
//                 return (
//                   <th key={header.id} colSpan={header.colSpan}>
//                     {header.isPlaceholder ? null : (
//                       <div>
//                         {flexRender(
//                           header.column.columnDef.header,
//                           header.getContext()
//                         )}
//                       </div>
//                     )}
//                   </th>
//                 );
//               })}
//             </tr>
//           ))}
//         </thead>
//         <tbody >
//           {table.getRowModel().rows.map((row) => {
//             return (
//               <tr key={row.id} className="border-b text-center"> 
//                 {row.getVisibleCells().map((cell) => {
//                   return (
//                     <td key={cell.id } >
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext()
//                       )}
//                     </td>
                    
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// if (!rootElement) throw new Error("Failed to find the root element");

// ReactDOM.createRoot(rootElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
