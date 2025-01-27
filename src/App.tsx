import Box from "@mui/material/Box";

import dropdown_list_with_state_and_export from './components/Item_1_of_NavBarSelection/dropdown_filter/dropdown_with_state_added_export_function.ts';

import table_and_drop_down from './components/Item_1_of_NavBarSelection/tables/table_and_drop_down.ts';

import {Dropdown_list} from './components/Item_1_of_NavBarSelection/dropdown_filter/component_dropdown_with_table_as_child.tsx';
import mockData_1 from './components/Item_1_of_NavBarSelection/tables/data.json';
import mockData_2 from './components/Item_1_of_NavBarSelection/tables/data_2.json';
import {dummy_murban, dummy_dubai, dummy_wti, dummy_brent} from './components/data_input/dummy_data_1.tsx';

import Tab_component from './components/tabs/tab_1.tsx'

import Page_1_table_1 from './components/Item_1_of_NavBarSelection/page_1.tsx';

import Nav_bar from './components/tabs/vertical_nav_bar.tsx'

export default function App() {

  return (
    
    <Box sx={{ display: 'flex', width: '100%', typography: 'body1' }}>
      <Nav_bar />
      {/* <Tab_component /> */}


  </Box>
  )
  
  }

