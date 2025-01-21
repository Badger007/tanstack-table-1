// import React, { useState, createContext } from "react";

// import Select from "react-select";
// import { gradeList } from "./data_dropdown";


// const DropDownContext = createContext(null)

// const default_selection = gradeList[1];


// ///back from the future
// export const dropdown_list =() => {
  
//   const [SelectedDropDownValue, setSelectedDropDownValue] = useState(
//     default_selection.value);

//   function handleClick(e) {
//     switch (e.value) {
//       case "Brent":
//         setSelectedDropDownValue("Brent");

//         break;
//       case "Dubai":
//         setSelectedDropDownValue("Dubai");
//         break;
//       case "Murban":
//         setSelectedDropDownValue("Murban");
//         break;
//       case "WTI":
//         setSelectedDropDownValue("WTI");
//         break;
//       default:

//         return e.value
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
//       <div>{SelectedDropDownValue}</div>
//     </>
//   );
// }



