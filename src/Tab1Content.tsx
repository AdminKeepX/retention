import React from 'react';
import { Typography, Box } from '@mui/material';
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import "./App.css";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";

const StyledAppTab = styled.div`
  background-color: #0000ff;
  color: ${"var(--black-color)"};

  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainerTab = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Tab1Content: React.FC = () => {
  return (
    
    <StyledAppTab>
      <AppContainerTab>
        
          
          
      </AppContainerTab>
    </StyledAppTab>
    
  );
};

export default Tab1Content;
