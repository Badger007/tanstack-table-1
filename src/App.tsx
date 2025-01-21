//https://medium.com/@jordammendes/build-powerfull-tables-in-reactjs-with-tanstack-9d57a3a63e35

// import * as React from 'react';

// import mockData from './data.json';

import dropdown_list_with_state_and_export from './components/dropdown_filter/dropdown_with_state_added_export_function';

import table_and_drop_down from './components/table_1/table_and_drop_down';

import {Dropdown_list} from './components/dropdown_filter/component_dropdown_with_table_as_child';
import mockData_1 from './components/table_1/data.json';
import mockData_2 from './components/table_1/data_2.json';
import {dummy_murban, dummy_dubai, dummy_wti, dummy_brent} from './components/table_1/dummy_data_1.tsx';

import Tab_component from './components/playground/mui_tab.tsx'

import Page_1_table_1 from './components/page_1.tsx';



export default function App() {

  return (

    <div>
      <div><Tab_component /> </div>
      
      {/* <div>
        <Page_1_table_1 />
      </div> */}
    </div>
  )
  
  }
