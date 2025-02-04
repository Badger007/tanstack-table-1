import { useState,useEffect  } from "react";
import Select from "react-select";
import { gradeList } from "./data_dropdown";
import { Table_2 } from "../tables/component_table_2";
import { downloadCSV } from "../../helpers/functions.tsx";

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
              Reset Values
            </button>
          </div>
        </div>
      </div>
    </>
  );
};