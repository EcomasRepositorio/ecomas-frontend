'use client';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section>
      <Box
        sx={{ flexGrow: 0, bgcolor: 'background.paper',  height: "100%", display: { xs: 'none', sm: 'flex' }, }}
      >
        {/* Tabs para orientación vertical */}
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: 'divider',
             // Ocultar en pantallas pequeñas
          }}
        >
          {/* Aquí van tus pestañas */}

          <Tab label="Ingeniería Civil" {...a11yProps(0)} />
          <Tab label="Ingeniería Ambiental" {...a11yProps(1)} />
          <Tab label="Ingeniería Agrónoma" {...a11yProps(2)} />
          <Tab label="Ingeniería Alimentaria" {...a11yProps(3)} />
          <Tab label="Profesionales en general" {...a11yProps(4)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          Ingeniería Civil
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Ingeniería Agrónoma
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>

      </Box>
{/*Para fonos */}
      <Box
        sx={{ flexGrow: 2, width: "100%",bgcolor: 'background.paper', height: 300, display: { xs: 'block', sm: 'none' }, }}
      >
        {/* Tabs para orientación vertical */}
        <Tabs
          orientation="horizontal"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Horizontal tabs example"

          sx={{
            display: { xs: 'block', sm: 'none' }, // Ocultar en pantallas grandes
          }}
        >
          <Tab label="Ingeniería Civil" {...a11yProps(0)} />
          <Tab label="Ingeniería Ambiental" {...a11yProps(1)} />
          <Tab label="Ingeniería Agrónoma" {...a11yProps(2)} />
          <Tab label="Ingeniería Alimentaria" {...a11yProps(3)} />
          <Tab label="Profesionales en general" {...a11yProps(4)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          Ingeniería Civil
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Ingeniería Agrónoma
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>


      </Box>
      

    </section>


  );
}