import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { Jetton } from "./components/Jetton";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";
import TabBar from "./Tabbar";

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tab1Content from "./Tab1Content";
import Tab2Content from "./Tab2Content";
import Tab3Content from "./Tab3Content";


const StyledApp = styled.div`
  background-color: #ffffff;
  color: ${"var(--black-color)"};

  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

// function App() {
//   const { network } = useTonConnect();

//   return (
//     <StyledApp>
//       <AppContainer>
//         <FlexBoxCol>
//           <FlexBoxRow>
//             <TonConnectButton />
//             <Button>
//               {network
//                 ? network === CHAIN.MAINNET
//                   ? "mainnet"
//                   : "testnet"
//                 : "N/A"}
//             </Button>
            
//           </FlexBoxRow>
          
//           <TabBar />
//         </FlexBoxCol>
//       </AppContainer>
//     </StyledApp>
//   );
// }

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        expand: () => void;
        // Добавьте другие методы и свойства, которые вам нужны
      };
    };
  }
}


function App() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.expand();
    }
  }, []);

  let content;
  switch (value) {
    case 0:
      content = <Tab1Content />;
      break;
    case 1:
      content = <Tab2Content />;
      break;
    case 2:
      content = <Tab3Content />;
      break;
    default:
      content = <Tab1Content />;
  }

  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      {content}
    </Box>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Paper>
  </Box>
  );
}

export default App;