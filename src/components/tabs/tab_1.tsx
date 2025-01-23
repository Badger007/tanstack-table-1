import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



import Page_1_table_1 from '../page_1.tsx';
import Page_1_table_2 from '../page_2.tsx';




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

          </TabList>
        </Box>
        <TabPanel value="1">{Page_1_table_2()}</TabPanel>
        <TabPanel value="2">{Page_1_table_1()}</TabPanel>

      </TabContext>
    </Box>
  );
}