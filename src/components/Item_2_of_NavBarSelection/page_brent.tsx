import React, { useState } from 'react';

import {Table_brent_spreads_with_button} from "./page_brent_new.tsx"
import Table_spreads from "./page_brent_child_table_1.tsx"
import Tables_dated_and_etf from "./page_brent_child_table_2.tsx"


const MyTables = () => {

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <div>
        <Table_brent_spreads_with_button />
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
