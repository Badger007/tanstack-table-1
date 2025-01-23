import React, { useState, createContext } from "react";

import Select from "react-select";
import { gradeList } from "./data_dropdown";

import { Table_2 } from "../table_1/component_table_2";

const default_selection = gradeList[1];

export const Dropdown_list = (props) => {
  const [NeededDataset, setNeededDataset] = useState(props.data[1]);
  const [tableKey, setTableKey] = useState(0); // Add a key state

  function handleClick(e) {
    
    switch (e.value) {
      case "Brent":
        setNeededDataset(props.data[0]);
        break;
      case "Dubai":
        setNeededDataset(props.data[1]);
        break;
      case "Murban":
        setNeededDataset(props.data[2]);
        break;
      case "WTI":
        setNeededDataset(props.data[3]);
        break;
      default:
        setNeededDataset(props.data[4]);
        return e.value;
    }
    setTableKey(prevKey => prevKey + 1); // Increment the key to reset the table
  }

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
//         <Table_2 key={tableKey} mockData={NeededDataset} /> {/* Use the key here */}
//       </div>
//     </>
//   );
// };



return (
  <>
    <Select
      className="basic-single"
      classNamePrefix="select"
      defaultValue={default_selection}
      name="color"
      options={gradeList}
      onChange={handleClick}
    />
    <div className="flex justify-between">
      <div className="flex-grow">
      <Table_2 key={tableKey} mockData={NeededDataset} />
      </div>
      <div className="py-10  grid  grid-cols-3 content-between gap-4">
        <button className="px-8 py-2 bg-blue-500 text-white rounded">
          Update Values
        </button>
      </div>
    </div>
  </>
);
}