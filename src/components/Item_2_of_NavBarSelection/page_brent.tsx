import React, { useState } from 'react';

import {Dropdown_list} from "./page_brent_experimental.tsx"
import Table_spreads from "./page_brent_child_table_1.tsx"
import Tables_dated_and_etf from "./page_brent_child_table_2.tsx"


const MyTables = () => {

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <div>
        <Dropdown_list />
      </div>
      {/* <div style={{ flex: 1,  }}>
        <Table_spreads />
      </div> */}

      <div style={{ flex: 1, borderLeft: '1px solid #ddd' }}> {/* border between left and right side*/}
        <div >
          <Tables_dated_and_etf />
        </div>
        </div>
    </div>

  );
};

export default MyTables;
