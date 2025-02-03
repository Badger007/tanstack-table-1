import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'

import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


///////////////////////////////////////////

// import { Dropdown_list } from "./components/Item_1_of_NavBarSelection/dropdown_filter/component_dropdown_with_table_as_child.tsx";

const dummy_murban = Array.from({ length: 50 }, (_, index) => {
  const SoD = Number((Math.random() * 100).toFixed(2));
  const Adj = Number(Math.random().toFixed(2));
  return {
    date: `date ${index + 1}`,
    SoD,
    Adj,
    Current: (SoD + Adj).toFixed(2), 
  };
});

const dummy_dubai = Array.from({ length: 50 }, (_, index) => {
  const SoD = Number((Math.random() * 100).toFixed(2));
  const Adj = Number(Math.random().toFixed(2));
  return {
    date: `date ${index + 1}`,
    SoD,
    Adj,
    Current: (SoD + Adj).toFixed(2), 
  };
});

const dummy_wti = Array.from({ length: 50 }, (_, index) => {
  const SoD = Number((Math.random() * 100).toFixed(2));
  const Adj = Number(Math.random().toFixed(2));
  return {
    date: `date ${index + 1}`,
    SoD,
    Adj,
    Current: (SoD + Adj).toFixed(2), 
  };
});

const dummy_brent = Array.from({ length: 50 }, (_, index) => {
  const SoD = Number((Math.random() * 100).toFixed(2));
  const Adj = Number(Math.random().toFixed(2));
  return {
    date: `date ${index + 1}`,
    SoD,
    Adj,
    Current: (SoD + Adj).toFixed(2), 
  };
});

/////////////////////////////

import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  RowData,
} from "@tanstack/react-table";


const defaultColumn: Partial<ColumnDef<any>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    if (id === "Adj") {
      const initialValue = getValue();
      const [value, setValue] = React.useState(initialValue);
      const handleChange = (e) => {
        let newValue = e.target.value;
        if (newValue === '') {
          newValue = '0'; 
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
          // onBlur={onBlur}
          type="number"
          step="0.01"
          className="text-center"
        />
      );
    } else {
      return <span>{getValue()}</span>;
    }
  },
};

function Table_2({ mockData, onUpdateData }) {
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      { accessorKey: "date", size: 200 },
      { accessorKey: "SoD", size: 200 },
      { accessorKey: "Adj", size: 200 },
      { accessorKey: "Current", size: 200 },
    ],
    []
  );

  const table = useReactTable({
    data: mockData,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: mockData.length,
      },
    },
    meta: {
      updateData: (rowIndex, columnId, value) => {
        const updatedData = [...mockData];
        updatedData[rowIndex][columnId] = parseFloat(value);
    
        updatedData[rowIndex].Current = (updatedData[rowIndex].SoD + updatedData[rowIndex].Adj).toFixed(2);
    
        onUpdateData(updatedData); 
      },
    },
    debugTable: false,
  });

  return (
    <div className="flex flex-col h-dvh max-w-4xl py-10 ">
      <table className="border">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b text-gray-800">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="px-4 pr-2 py-4 font-medium text-center"
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b text-center">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{ width: cell.column.getSize() }}
                  className="px-0.5 pt-[4px] pb-[4px]"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/////////////////////////////


import { useState,useEffect  } from "react";
import Select from "react-select";
import { gradeList } from "./components/Item_1_of_NavBarSelection/dropdown_filter/data_dropdown";
// import { Table_2 } from "../tables/component_table_2";
import { downloadCSV } from "./components/helpers/functions.tsx";

const default_selection = gradeList[1];

export const Dropdown_list = (props) => {
  const [neededDataset, setNeededDataset] = useState(props.data[1]);
  const [tableData, setTableData] = useState(neededDataset);
  const [originalData, setOriginalData] = useState(() => JSON.parse(JSON.stringify(neededDataset))); // Deep copy of the initial data

  useEffect(() => {
    setOriginalData(JSON.parse(JSON.stringify(neededDataset))); // Update original data when dataset changes
  }, [neededDataset]);

  const handleReset = () => {
    setTableData(JSON.parse(JSON.stringify(originalData))); // Reset table data to original data
  };

  function handleClick(e) {
    // Reset the current dataset to its original state before switching

    let newDataset;
    switch (e.value) {
      case 'Brent':
        newDataset = props.data[0];
        break;
      case 'Dubai':
        newDataset = props.data[1];
        break;
      case 'Murban':
        newDataset = props.data[2];
        break;
      case 'WTI':
        newDataset = props.data[3];
        break;
      default:
        newDataset = props.data[4];
        // return e.value;
    }
    
    setNeededDataset(newDataset);
    setTableData(newDataset);
  }

  const handleUpdateData = (newData) => {
    setTableData(newData);
  };

  return (
    <>
      <div className="flex">
        <div className="h-screen">
          <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={default_selection}
            name="color"
            options={gradeList}
            onFocus={handleReset}
            onChange={handleClick}
          />
  
          <div className="flex-grow">
            <Table_2 mockData={tableData} onUpdateData={handleUpdateData} />
          </div>
        </div>
  
        <div className="px-4 pt-20 items-start justify-start">
          <div className="flex flex-col space-y-2"> {/* Flex container with column direction */}
            <button
              className="px-8 py-2 bg-blue-500 text-white rounded"
              onClick={() => downloadCSV(tableData)}
            >
              Update Values
            </button>
            <button
              className="px-8 py-2 bg-red-500 text-white rounded"
              onClick={handleReset} // Reset button
            >
              Reset Adj Values
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <Dropdown_list
        data={[dummy_murban, dummy_dubai, dummy_wti, dummy_brent]}
      />
    </div>
  </React.StrictMode>
);