'use client';
import * as React from 'react';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import DiploCivil from './diplomadosCivil';
import DiploAmbiental from './diplomadosAmbient';
import DashboardSkeleton from '@/components/home/skeletons'
import { Suspense } from 'react'

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
    <div >
      <Box
        sx={{ flexGrow: 1, width: "100%", display: { xs: 'none', sm: 'flex' }, }}
      >
        {/* Tabs para orientación vertical */}
        <Tabs
          orientation="vertical"

          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            width: "50%"
            // Ocultar en pantallas pequeñas
          }}
          className='mt-8'
        >
          {/* Aquí van tus pestañas */}
          <Tab
            label="Ingeniería Civil"
            {...a11yProps(0)}
            className="dark:text-white focus:text-primaryblue dark:focus:text-primaryblue"
          />
          <Tab
            label="Ingeniería Ambiental "
            {...a11yProps(1)}
            className="dark:text-white focus:text-primaryblue dark:focus:text-primaryblue"
          />
          <Tab
            label="Ingeniería Agrónoma"
            {...a11yProps(2)}
            className="dark:text-white focus:text-primaryblue dark:focus:text-primaryblue"
          />
          <Tab
            label="Ingeniería Alimentaria"
            {...a11yProps(3)}
            className="dark:text-white focus:text-primaryblue dark:focus:text-primaryblue"
          />
          <Tab
            label="Profesionales en general"
            {...a11yProps(4)}
            className="dark:text-white focus:text-primaryblue dark:focus:text-primaryblue"
          />


        </Tabs>

        <TabPanel value={value} index={0}>
          <Suspense fallback={<DashboardSkeleton />}>
            <DiploCivil />
          </Suspense>

        </TabPanel>
        <TabPanel value={value} index={1}>
          <Suspense fallback={<DashboardSkeleton />}>
            <DiploAmbiental />
          </Suspense>

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
        sx={{ flexGrow: 0, display: { xs: 'block', sm: 'none' }, }}
      >
        {/* Tabs para orientación vertical */}
        <Tabs
          orientation="horizontal"
          value={value}
          onChange={handleChange}
          aria-label="Horizontal tabs example"
          variant="scrollable"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, // Cambiado a 'column' para dispositivos móviles
          }}
        >
          <Tab label="Ingeniería Civil" {...a11yProps(0)} />
          <Tab label="Ingeniería Ambiental" {...a11yProps(1)} />
          <Tab label="Ingeniería Agrónoma" {...a11yProps(2)} />
          <Tab label="Ingeniería Alimentaria" {...a11yProps(3)} />
          <Tab label="Profesionales en general" {...a11yProps(4)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Suspense fallback={<DashboardSkeleton />}>
            <DiploCivil />
          </Suspense>

        </TabPanel>
        <TabPanel value={value} index={1}>
          <Suspense fallback={<DashboardSkeleton />}>
            <DiploAmbiental />
          </Suspense>

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


    </div>



  );
}