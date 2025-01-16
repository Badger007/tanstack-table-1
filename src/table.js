// export const Table = ({ columns, data, noDataComponent, ...rest }) => {
//     const tableColumns = useMemo(() => columns, [columns]);
//     const { getTableBodyProps, getTableProps, headerGroups, prepareRow, rows } = useTable({ columns: tableColumns, data });
  
//     if (!rows.length) {
//       if (noDataComponent) return noDataComponent;
//       return <>No data</>;
//     }
  
//     return (
//       <table {...getTableProps()} {...rest}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   const { className, style } = cell.column;
//                   return (
//                     <td {...cell.getCellProps({ className, style })}>
//                       {cell.render('Cell')}
//                     </td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     );
//   };