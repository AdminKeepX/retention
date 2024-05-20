import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Box, CssBaseline, Container } from '@mui/material';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import Tab1Content from './Tab1Content';
import Tab2Content from './Tab2Content';
import Tab3Content from './Tab3Content';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

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
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const TabBar: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <TonConnectUIProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        <Container maxWidth="md" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Box component="main" style={{ flexGrow: 1 }}>
            <TabPanel value={value} index={0}>
              <Tab1Content />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Tab2Content />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Tab3Content />
            </TabPanel>
          </Box>
          <AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0, width: '100%' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              variant="fullWidth"
              indicatorColor="secondary"
              textColor="inherit"
            >
              <Tab
                icon={<HomeIcon />}
                label="Home"
                {...a11yProps(0)}
                style={value === 0 ? { color: 'white' } : { color: 'light' }}
              />
              <Tab
                icon={<LocalOfferIcon />}
                label="Create"
                {...a11yProps(1)}
                style={value === 1 ? { color: 'white' } : { color: 'light' }}
              />
              <Tab
                icon={<InfoIcon />}
                label="About"
                {...a11yProps(2)}
                style={value === 2 ? { color: 'white' } : { color: 'light' }}
              />
            </Tabs>
          </AppBar>
        </Container>
      </div>
    </TonConnectUIProvider>
  );
};

export default TabBar;
