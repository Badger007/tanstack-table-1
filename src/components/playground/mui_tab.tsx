import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



import {Dropdown_list} from './dropdown_filter/component_dropdown_with_table_as_child.tsx';
import {dummy_murban, dummy_dubai, dummy_wti, dummy_brent} from './table_1/dummy_data_1.tsx';
import { Table_1 } from "../table_1/component_table_1";

import Page_1_table_1 from '../page_1.tsx';


function wtf ({data}={}) {
  return "hello " + data
}

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Forward" value="1" />
            <Tab label="Historical" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        {/* <TabPanel value="1">{wtf({data:"why"})}</TabPanel> */}
        <TabPanel value="1">{Page_1_table_1()}</TabPanel>
        <TabPanel value="2">{Page_1_table_1()}</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}