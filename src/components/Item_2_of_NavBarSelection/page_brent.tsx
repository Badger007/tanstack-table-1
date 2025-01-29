import React, { useState } from 'react';

import {Table_brent_spreads_with_button} from "./page_brent_new.tsx"
import Table_spreads from "./page_brent_child_table_1.tsx"
import Tables_dated_and_etf from "./page_brent_child_table_2.tsx"
import {Table_brent_dated} from "./Table_brent_dated.tsx"
import {Two_tables_dated_and_etf_and_button} from "./new_page_brent_and_dated_with_button.tsx"

const MyTables = () => {

  return (
    <div className=" flex h-dvh  py-4 ">

      <div className=" pe-4 ">
        <Table_brent_spreads_with_button />
      </div>
      {/* <div style={{ flex: 1,  }}>
        <Table_spreads />
      </div> */}

      {/* <div style={{ flex: 1, borderLeft: '1px solid #ddd' }}> border between left and right side */}
      <div class="border border-grey border-t-0 border-l-1 border-r-0 border-b-0 ps-4 pe-2">
        <div>
          <Two_tables_dated_and_etf_and_button />
        </div>

        </div>
    </div>

  );
};

export default MyTables;
