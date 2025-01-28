import { useState } from "react";
import { Table_experimental } from "./table_template_experimental";
import {downloadCSV} from "../helpers/functions.tsx"

import {
    dummy_murban,
    
  } from "../data_input/dummy_data_1.tsx";


export const Dropdown_list = () => {
  const [tableData, setTableData] = useState(dummy_murban); 
  const handleUpdateData = (newData) => {
    setTableData(newData); 
  };


  return (
    <>

      <div className="flex h-screen ">
        <div className="flex-grow">
          <Table_experimental mockData={tableData} onUpdateData={handleUpdateData} /> 
        </div>
        <div className="px-4 py-10 w-1/3 flex items-start justify-start ">
          <button 
            className="px-8 py-2 bg-blue-500 text-white rounded"
            onClick={() => downloadCSV(tableData)} 
          >
            Update Values
          </button>
        </div>
      </div>
    </>
  );
};