import { useState } from "react";
import Select from "react-select";
import { gradeList } from "./data_dropdown";
import { Table_2 } from "../tables/component_table_2";
import { downloadCSV } from "../../helpers/functions.tsx";

const default_selection = gradeList[1];

export const Dropdown_list = (props) => {
  const [neededDataset, setNeededDataset] = useState(props.data[1]);
  const [tableData, setTableData] = useState(neededDataset); // State to hold the table data

  function handleClick(e) {
    let newDataset;
    switch (e.value) {
      case "Brent":
        newDataset = props.data[0];
        break;
      case "Dubai":
        newDataset = props.data[1];
        break;
      case "Murban":
        newDataset = props.data[2];
        break;
      case "WTI":
        newDataset = props.data[3];
        break;
      default:
        newDataset = props.data[4];
        return e.value;
    }
    setNeededDataset(newDataset);
    setTableData(newDataset); // Update the table data state
  }

  const handleUpdateData = (newData) => {
    setTableData(newData); // Update the table data state when changes are made
  };

  return (
    <>
      <div className=" flex ">
        <div className=" h-screen ">
          <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={default_selection}
            name="color"
            options={gradeList}
            onChange={handleClick}
          />

          <div className="flex-grow">
            <Table_2 mockData={tableData} onUpdateData={handleUpdateData} />{" "}
            {/* Pass the update handler */}
          </div>
        </div>

        <div className="px-4 pt-20  items-start justify-start ">
          <button
            className="px-8 py-2 bg-blue-500 text-white rounded"
            onClick={() => downloadCSV(tableData)} // Use the updated table data
          >
            Update Values
          </button>
        </div>
      </div>
    </>
  );
};
