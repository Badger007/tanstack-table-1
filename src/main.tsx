import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



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

// // Give our default column cell renderer editing superpowers!
// const defaultColumn: Partial<ColumnDef<Person>> = {
//   cell: ({ getValue, row: { index }, column: { id }, table }) => {
//     const initialValue = getValue();
//     // We need to keep and update the state of the cell normally
//     const [value, setValue] = React.useState(initialValue);

//     // When the input is blurred, we'll call our table meta's updateData function
//     const onBlur = () => {
//       table.options.meta?.updateData(index, id, value);
//     };

//     // If the initialValue is changed external, sync it up with our state
//     React.useEffect(() => {
//       setValue(initialValue);
//     }, [initialValue]);

//     return (
//       <input
//         value={value as string}
//         onChange={(e) => setValue(e.target.value)}
//         onBlur={onBlur}
//       />
//     );
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
//   // const rerender = React.useReducer(() => ({}), {})[1];

//   const columns = React.useMemo<ColumnDef<Person>[]>(
//     () => [
//       {
//         accessorKey: "firstName",
//       },
//       {
//         accessorKey: "lastName",
//       },

//       {
//         accessorKey: "age",
//       },

//       {
//         accessorKey: "visits",
//       },
//       {
//         accessorKey: "status",
//       },
//       {
//         accessorKey: "progress",
//       },
//     ],
//     []
//   );

//   const [data, setData] = React.useState(() => makeData(1000));

//   const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();


// // console.log(defaultColumn)

//   const table = useReactTable({
//     data,
//     columns,
//     defaultColumn,
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     autoResetPageIndex,
//     // Provide our updateData function to our table meta
//     meta: {
//       updateData: (rowIndex, columnId, value) => {
//         // Skip page index reset until after next rerender
//         skipAutoResetPageIndex();
//         setData((old) =>
//           old.map((row, index) => {
//             if (index === rowIndex) {
//               return {
//                 ...old[rowIndex]!,
//                 [columnId]: value,
//               };
//             }
//             return row;
//           })
//         );
//       },
//     },
//     debugTable: true,
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
//         <tbody>
//           {table.getRowModel().rows.map((row) => {
//             return (
//               <tr key={row.id}>
//                 {row.getVisibleCells().map((cell) => {
//                   return (
//                     <td key={cell.id}>
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
