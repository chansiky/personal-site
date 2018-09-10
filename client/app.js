import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'


import {Navbar, Sidebar} from './components'
import Routes from './routes'

const StyledSidebar = styled(Sidebar)`
  padding: 50px;
  background-color: blue;
`;

const StyledGridContainer = styled(Grid)`
  spacing = 12;
  background-color: magenta;
  flexDirection: column;
  justifyContent: flex-end;
  
`;

const StyledGridItem = styled(Grid)`
  background-color: coral;
`;

const styles = {
  container : {
    justifyContent : 'flex-end',
    flexDirection: 'column',
    backgroundColor: 'gold'
  },
  sidebar : {
    padding: '20px',
    backgroundColor: 'magenta'
  },
  main: {

  }
}

const App = () => {
  return (
    <div background-color='red'>
      <StyledGridContainer container 
      >
        <CssBaseline />
        
        <StyledGridItem item 
          xs={3}
        >
          <StyledSidebar
           />
        </StyledGridItem>
        <StyledGridItem item 
          xs={6}
        >
          <Routes />
        </StyledGridItem>
      </StyledGridContainer>
    </div>
  )
}

export default App
