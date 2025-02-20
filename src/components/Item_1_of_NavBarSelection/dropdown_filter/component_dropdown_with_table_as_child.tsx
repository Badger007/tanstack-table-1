import { useState } from "react";

import Select from "react-select";
import { gradeList } from "./data_dropdown";

import { Table_1 } from "../tables/component_table_1";

const default_selection = gradeList[1];

export const Dropdown_list = (props) => {
  const [NeededDataset, setNeededDataset] = useState(props.data[1]);

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
      
      <div className="flex h-screen ">
              <div className="flex-grow">
                <Table_1 mockData={NeededDataset} /> {/* Pass the update handler */}
              </div></div>


      {/* <div>
        <Table_1 mockData={NeededDataset} />
      </div> */}
    </>
  );
};
