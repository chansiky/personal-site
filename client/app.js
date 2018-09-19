import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'


import {Navbar, Sidebar} from './components'
import Routes from './routes'


const StyledApp = styled.div`
  background-image: url("Grid10x10-Thin.png");
  background-repeat: repeat;
  background-size: 200px;
  height: 100vh;
`

const StyledSidebar = styled(Sidebar)`
  padding: 50px;
`

const StyledGridContainer = styled(Grid)`
  flexDirection: column;
  justifyContent: flex-end;
`

const StyledGridItem = styled(Grid)`
`

const StyledFrontpageDiv = styled.div`
  padding: 50px;
`
const StyledBottomMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
const StyledBottomMessageColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledBottomMessageText = styled.div`
  font-size: 11px;
`

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
    <StyledApp>
      <div background-color='red'>
        <div>
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
            <StyledFrontpageDiv>
              <Routes />
            </StyledFrontpageDiv>
            <StyledBottomMessage>
              <StyledBottomMessageColumn>
              <StyledBottomMessageText>
                Website built on Node.js, Express, React & Redux, PostgresQL/Sequelize
              </StyledBottomMessageText>  
              <StyledBottomMessageText>  
                (Fancy graphics and updates under contruction, please be patient!)
              </StyledBottomMessageText>  
              </StyledBottomMessageColumn>
            </StyledBottomMessage>
          </StyledGridItem>
          <StyledGridItem item 
            xs={3}
          >
          </StyledGridItem>
        </StyledGridContainer>
        </div>
      </div>
    </StyledApp>
  )
}

export default App
