// import {Table_brent_dated} from "./Table_brent_spreads_with_button_new.tsx"



// export function Two_tables_dated_and_etf_and_button () {
//     return <Table_brent_dated />
// }


import React, { useState } from "react";
import { Table_brent_dated } from "./Table_brent_dated.tsx";
import { Table_brent_etf } from "./Table_brent_etf.tsx";

import { downloadCSV } from "../../helpers/functions.tsx";


// // random values for the DATED table
// const datedDataInitial = Array.from({ length: 7 }, (_, index) => ({
//   week: `week ${index + 1}`,
//   eod: (Math.random() * 100).toFixed(2),
//   current: (Math.random() * 100).toFixed(2),
//   change: (Math.random() * 10).toFixed(2),
// }));


const datedDataInitial = Array.from({ length: 10 }, (_, index) => {
  const eod = Number((Math.random() * 100).toFixed(2));
  const current = Number((Math.random() * 100).toFixed(2));
  return {
    week: `week ${index + 1}`,
    eod,
    current,
    change: (current - eod).toFixed(2), // Calculate change on load
  };
});

// random values for the ETF table
// const etfDataInitial = Array.from({ length: 3 }, (_, index) => ({
//     month: `month ${index + 1}`,
//     eod: (Math.random() * 100).toFixed(2),
//     current: (Math.random() * 100).toFixed(2),
//     change: (Math.random() * 10).toFixed(2),
//   }));

  const etfDataInitial = Array.from({ length: 10 }, (_, index) => {
    const eod = Number((Math.random() * 100).toFixed(2));
    const current = Number((Math.random() * 100).toFixed(2));
    return {
      month: `month ${index + 1}`,
      eod,
      current,
      change: (current - eod).toFixed(2), // Calculate change on load
    };
  });


export function Two_tables_dated_and_etf_and_button() {

    //latest state of the DATED table
  const [tableData_DATED, setTableData_DATED] = useState(datedDataInitial);
  
  // const handleUpdateData_DATED = (newData) => {
  //   setTableData_DATED(newData);
  // };
  const handleUpdateData_DATED = (newData) => {
    // Recalculate change for each row
    const updatedData_DATED = newData.map((row) => ({
      ...row,
      change: (row.current - row.eod  ).toFixed(2),
    }));
    setTableData_DATED(updatedData_DATED);
  };


      //latest state of the ETF table
      const [tableData_ETF, setTableData_ETF] = useState(etfDataInitial);
      
      // const handleUpdateData_ETF = (newData) => {
      //   setTableData_ETF(newData);
      // };

      const handleUpdateData_ETF = (newData) => {
        // Recalculate change for each row
        const updatedData_ETF = newData.map((row) => ({
          ...row,
          change: (row.current - row.eod  ).toFixed(2),
        }));
        setTableData_ETF(updatedData_ETF);
      };

  return (
    <div>
      <Table_brent_dated tableData={tableData_DATED} onUpdateData={handleUpdateData_DATED} />
      <Table_brent_etf tableData={tableData_ETF} onUpdateData={handleUpdateData_ETF} />
      <div >
      <button
        className="px-8 py-2 bg-blue-500 text-white rounded "
        onClick={() => {downloadCSV(tableData_DATED,"dated");
            downloadCSV(tableData_ETF,"etf")
        }}
      >
        Update Values
      </button>
      </div>
    </div>
  );
}