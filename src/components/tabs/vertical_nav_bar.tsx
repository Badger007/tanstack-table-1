import React from 'react';
import { AppBar, Tabs, Tab, Box } from '@mui/material';

import Tab_component_1 from './tab_1.tsx'
import Tab_component_2 from '../Item_2_of_NavBarSelection/tab_2.tsx'


const NavigationBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static" sx={{ width: '200px', height: '100vh' }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
          <Tab label="Tab 4" />
        </Tabs>
      </AppBar>
      <Box sx={{ padding: 2 }}>
        {value === 0 && <div><Tab_component_1 /></div>}
        {value === 1 && <div><Tab_component_2 /></div>}
        {value === 2 && <div>Content for Tab 3</div>}
        {value === 3 && <div>Content for Tab 4</div>}
      </Box>
    </Box>
  );
};

export default NavigationBar;
