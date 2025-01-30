// import React, { useState } from 'react';
// import { downloadCSV } from "../helpers/functions.tsx";
// import { Table_template } from "./table_template.tsx";
// import {
//   useReactTable,
//   getCoreRowModel,
//   flexRender,
// } from '@tanstack/react-table';

// const datedDataInitial = Array.from({ length: 7 }, (_, index) => ({
//   week: `Week ${index + 1}`,
//   eod: (Math.random() * 100).toFixed(2),
//   current: (Math.random() * 100).toFixed(2),
//   change: (Math.random() * 10).toFixed(2),
// }));

// const etfDataInitial = Array.from({ length: 3 }, (_, index) => ({
//   month: `Month ${index + 1}`,
//   eod: (Math.random() * 100).toFixed(2),
//   current: (Math.random() * 100).toFixed(2),
//   change: (Math.random() * 10).toFixed(2),
// }));

// const MyTables = () => {
//   const [datedData, setDatedData] = useState(datedDataInitial);
//   const [etfData, setEtfData] = useState(etfDataInitial);

//   const columnsDated = [
//     { accessorKey: 'week', header: 'Week' },
//     { accessorKey: 'eod', header: 'EOD' },
//     {
//       accessorKey: 'current',
//       header: 'Current',
//       cell: ({ row }) => {
//         const [currentValue, setCurrentValue] = useState(row.getValue('current'));
//         return (
//           <input
//             type="number"
//             step="0.01"
//             value={currentValue}
//             onChange={(e) => {
//               const newValue = e.target.value;
//               setCurrentValue(newValue);
//               setDatedData((prevData) =>
//                 prevData.map((item, idx) =>
//                   idx === row.index ? { ...item, current: newValue } : item
//                 )
//               );
//             }}
//             style={{ width: '60%', textAlign: 'center' }}
//           />
//         );
//       },
//     },
//     { accessorKey: 'change', header: 'Change' },
//   ];

//   const columnsEtf = [
//     { accessorKey: 'month', header: 'Month' },
//     { accessorKey: 'eod', header: 'EOD' },
//     {
//       accessorKey: 'current',
//       header: 'Current',
//       cell: ({ row }) => {
//         const [currentValue, setCurrentValue] = useState(row.getValue('current'));
//         return (
//           <input
//             type="number"
//             step="0.01"
//             value={currentValue}
//             onChange={(e) => {
//               const newValue = e.target.value;
//               setCurrentValue(newValue);
//               setEtfData((prevData) =>
//                 prevData.map((item, idx) =>
//                   idx === row.index ? { ...item, current: newValue } : item
//                 )
//               );
//             }}
//             style={{ width: '60%', textAlign: 'center' }}
//           />
//         );
//       },
//     },
//     { accessorKey: 'change', header: 'Change' },
//   ];

//   const datedTable = useReactTable({
//     data: datedData,
//     columns: columnsDated,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   const etfTable = useReactTable({
//     data: etfData,
//     columns: columnsEtf,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   return (
//     <div>
//       <div>
//         {Table_template(datedTable, "Dated")}
//       </div>
//       <div>
//         {Table_template(etfTable, "ETF")}
//       </div>
//       <div className="py-5">
//         <button
//           className="px-8 py-2 bg-blue-500 text-white rounded w-50"
//           onClick={() => {
//             downloadCSV(datedData, "dated");
//             downloadCSV(etfData, "etf");
//           }}
//         >
//           Update Values
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MyTables;