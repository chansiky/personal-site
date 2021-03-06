import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { StyledLinkText } from '../style'
import withWidth from'@material-ui/core/withWidth'
import {Navbar, Sidebar} from './index'
import Routes from '../routes'
import {withRouter} from 'react-router-dom'

const StyledSidebar = styled(Sidebar)`
  padding: 50px;
`

const StyledGridContainer = styled(Grid)`
  flexDirection: column;
  justifyContent: flex-end;
`

const StyledGridItem = styled(Grid)`
`

const StyledBodyDiv = styled.div`
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

const StyledColumnAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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

const WebApp = (props) => {
  return (
    <div>
      <div>
        <div>
        <StyledGridContainer container 
        >
          <CssBaseline />
          <StyledGridItem item 
            xs={3}
          >
          <StyledColumnAlign>
             <StyledSidebar
            />
          </StyledColumnAlign>
          </StyledGridItem>
          <StyledGridItem item 
            xs={6}
          >
            <StyledBodyDiv>
              <Routes />
            </StyledBodyDiv>
            <StyledBottomMessage>
              <StyledBottomMessageColumn>
              <StyledBottomMessageText>
                Website built on Node.js, Express, React & Redux, PostgresQL/Sequelize: &nbsp;
                <StyledLinkText href='https://github.com/chansiky/personal-site'>
                  source
                </StyledLinkText>
              </StyledBottomMessageText>  
              <StyledBottomMessageText>  
                (I will update with fancy graphics soon, please be patient!)
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
    </div>
  )
}


export default withRouter(WebApp);
