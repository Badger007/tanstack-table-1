import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Page_1_table_1 from "../Item_1_of_NavBarSelection/page_1.tsx";
import Page_1_table_2 from "../Item_1_of_NavBarSelection/page_2.tsx";

import Brent_page_tables from "./page_brent"

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Brent" value="1" />
            <Tab label="Dubai" value="2" />
            <Tab label="Markets" value="3" />
            <Tab label="Vols" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1"><Brent_page_tables/></TabPanel>
        <TabPanel value="2">Dubai</TabPanel>
        <TabPanel value="3">Markets</TabPanel>
        <TabPanel value="4">Vols</TabPanel>
      </TabContext>
    </Box>
  );
}
