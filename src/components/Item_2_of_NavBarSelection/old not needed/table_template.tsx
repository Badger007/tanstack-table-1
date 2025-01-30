// // import { downloadCSV } from "../helpers/functions.tsx";

// import {
//     flexRender,
//   } from "@tanstack/react-table";

// export function Table_template (tableData, table_name) {
//     return (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             padding: "10px",
//           }}
//         >
//           <div >
//             <h2 className="font-medium text-center">{table_name}</h2>
//             <table
//               className="border"
//               style={{
//                 borderCollapse: "collapse",
//                 width: "100%",
//                 maxWidth: "600px",
//                 tableLayout: "auto",
//               }}
//             >
//               <thead>
//                 {tableData.getHeaderGroups().map((headerGroup) => (
//                   <tr key={headerGroup.id} className="border-b text-gray-800">
//                     {headerGroup.headers.map((header) => (
//                       <th
//                         key={header.id}
//                         colSpan={header.colSpan}
//                         className="px-4 pr-2 py-4 font-medium text-center"
//                       >
//                         {header.isPlaceholder ? null : (
//                           <div>
//                             {flexRender(
//                               header.column.columnDef.header,
//                               header.getContext()
//                             )}
//                           </div>
//                         )}
//                       </th>
//                     ))}
//                   </tr>
//                 ))}
//               </thead>
//               <tbody>
//                 {tableData.getRowModel().rows.map((row) => (
//                   <tr key={row.id} className="border-b text-center">
//                     {row.getVisibleCells().map((cell) => (
//                       <td key={cell.id} style={{ padding: "8px" }}>
//                         {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       );
// }