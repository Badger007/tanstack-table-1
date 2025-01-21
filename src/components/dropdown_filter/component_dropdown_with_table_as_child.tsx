import React, { useState, createContext } from "react";

import Select from "react-select";
import { gradeList } from "./data_dropdown";

import {Table_1} from '../table_1/component_table_1';
// import mockData_1 from '../table_1/data.json';
// import mockData_2 from '../table_1/data_2.json';

const DropDownContext = createContext(null)

const default_selection = gradeList[1];


// var dataset = mockData_2

// function Main(SelectedDropDownValue) { 
//   if (SelectedDropDownValue==gradeList[1]) {
//     dataset = mockData_1
//   } else {
//     dataset = mockData_2
//   }
//   return Table_1(mockData_2)  
// };

///back from the future
export const Dropdown_list =(props) => {
  
  const [SelectedDropDownValue, setSelectedDropDownValue] = useState(
    default_selection.value);


  const [NeededDataset, setNeededDataset] = useState(props.mockData_2);

  function handleClick(e) {


    switch (e.value) {
      

      case "Brent":
        setSelectedDropDownValue("Brent");
        setNeededDataset(props.mockData_2)
        break;
      case "Dubai":
        setSelectedDropDownValue("Dubai");
        setNeededDataset(props.mockData_2)
        break;
      case "Murban":
        setSelectedDropDownValue("Murban");
        setNeededDataset(props.mockData_1)
        break;
      case "WTI":
        setSelectedDropDownValue("WTI");
        setNeededDataset(props.mockData_1)
                break;
      default:
        setNeededDataset(props.mockData_1)
        return e.value
        
    }
  }

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
      <div>{SelectedDropDownValue}</div>
      <div>{NeededDataset[0].date}</div>
      <div>
        <Table_1 mockData={NeededDataset}/>
    </div>


      {/* <div>
        <Main SelectedDropDownValue={SelectedDropDownValue}/>
    </div> */}
    <div>
      {SelectedDropDownValue}
    </div>
    </>
  );
}






