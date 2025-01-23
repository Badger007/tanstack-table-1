import {Dropdown_list} from './dropdown_filter/component_dropdown_with_table_as_child_2.tsx';
import {dummy_murban, dummy_dubai, dummy_wti, dummy_brent} from './table_1/dummy_data_1.tsx';




export default function page_1_table_1() {

    return (
  
      <div>
        <div>
        <Dropdown_list data={[dummy_murban, dummy_dubai, dummy_wti, dummy_brent]} />
        </div>
      </div>
    )
    
    }



// import {dummy_murban, dummy_dubai, dummy_wti, dummy_brent} from './table_1/dummy_data_1.tsx';


// import React, { useState, createContext } from "react";

// import Select from "react-select";


// export const gradeList: readonly gradeLists[] = [
//   { value: 'Brent', label: 'Brent', isFixed: true },
//   { value: 'Dubai', label: 'Dubai', isDisabled: false },
//   { value: 'Murban', label: 'Murban',  },
//   { value: 'WTI', label: 'WTI', isFixed: true },

// ];


// import {
//   ColumnDef,
//   useReactTable,
//   getCoreRowModel,
//   // getFilteredRowModel,
//   getPaginationRowModel,
//   flexRender,
//   RowData,
// } from "@tanstack/react-table";


// declare module "@tanstack/react-table" {
//   interface TableMeta<TData extends RowData> {
//     updateData: (rowIndex: number, columnId: string, value: unknown) => void;
//   }
// }

// type Crude_Table = {
//   date: String;
//   SoD: number;
//   Const: number;
//   Spread: number;
// };


// const defaultColumn: Partial<ColumnDef<Crude_Table>> = {
//   // size: 100, // Set a default column width
//   // minSize: 100, // Set a minimum width for resizing
//   // maxSize: 300, // Set a maximum width for resizing
//   cell: ({ getValue, row: { index }, column: { id }, table }) => {

    
    
//     if (id === 'Const' ) {
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
//           className="text-center"
//         />

//       );
//     } 
//     else {
    
//     return <span>{getValue()}</span>;
//     // return    <p>{getValue()}</p>    

//   }
//   },
  
// };


// export function Table_2(props) {

//   const columns = React.useMemo<ColumnDef<Crude_Table>[]>(
//     () => [
//       {
//         accessorKey: "date",
//         size: 200, // Set a specific width for the column
//         // minSize: 400
//       },
//       {
//         accessorKey: "SoD",
//         size: 200,
//       },
//       {
//         accessorKey: "Const",
//         size: 200,
//       },
//       {
//         accessorKey: "Spread",
//         size: 200,
//         // minSize: 500
//       },

//     ],
//     []
//   );

//   const [data] = [props.mockData];
 

//   const table = useReactTable({
//     data,
//     columns,
//     defaultColumn,
//     getCoreRowModel: getCoreRowModel(),
//     // getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     initialState: {
//       pagination: {
//         pageSize: data.length,
//       },
      
//     },
    
    
//     debugTable: false,
//   });

//   return (
//         <div className="flex flex-col h-dvh max-w-4xl py-10 pl-10">
//           {/* <div className="h-2" /> */}
//           <table className="border">
//             <thead>
//               {table.getHeaderGroups().map((headerGroup) => (
//                 <tr key={headerGroup.id}
//                 className="border-b text-gray-800">
//                   {headerGroup.headers.map((header) => {
//                     return (
//                       <th key={header.id} 
//                       colSpan={header.colSpan}
//                       className="px-4 pr-2 py-4 font-medium text-center">
//                         {header.isPlaceholder ? null : (
//                           <div>
//                             {flexRender(
//                               header.column.columnDef.header,
//                               header.getContext()
//                             )}
//                           </div>
//                         )}
//                       </th>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </thead>
//             <tbody >
//               {table.getRowModel().rows.map((row) => {
//                 return (
//                   <tr key={row.id} className="border-b text-center"> 
//                     {row.getVisibleCells().map((cell) => {
//                       return (
//                         <td key={cell.id } 
//                         style={{ width: cell.column.getSize() }}
//                         className="px-0.5 pt-[4px] pb-[4px]">
//                           {flexRender(
//                             cell.column.columnDef.cell,
//                             cell.getContext()
//                           )}
//                         </td>
                        
//                       );
//                     })}
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       );
//     }

// // const rootElement = document.getElementById("root");
// // if (!rootElement) throw new Error("Failed to find the root element");

// // ReactDOM.createRoot(rootElement).render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );


// const default_selection = gradeList[1];

// export const Dropdown_list = (props) => {
//   const [NeededDataset, setNeededDataset] = useState(props.data[1]);

//   function handleClick(e) {
    
//     switch (e.value) {
//       case "Brent":
//         setNeededDataset(props.data[0]);
//         break;
//       case "Dubai":
//         setNeededDataset(props.data[1]);
//         break;
//       case "Murban":
//         setNeededDataset(props.data[2]);
//         break;
//       case "WTI":
//         setNeededDataset(props.data[3]);
//         break;
//       default:
//         setNeededDataset(props.data[4]);
//         return e.value;
//     }
//   }

//   return (
//     <>
//       <Select
//         className="basic-single"
//         classNamePrefix="select"
//         defaultValue={default_selection}
//         name="color"
//         options={gradeList}
//         onChange={handleClick}
//       />

//       <div>
//         {/* <Table_2 mockData={NeededDataset} /> */}
//         <Table_2 mockData={NeededDataset}/>
//       </div>
//     </>
//   );
// };


// export default function page_1_table_1() {

//     return (
  
//       <div>
//         <div>
//         <Dropdown_list data={[dummy_murban, dummy_dubai, dummy_wti, dummy_brent]} />
//         </div>
//       </div>
//     )
    
//     }
  
  