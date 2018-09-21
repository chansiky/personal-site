import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import {Sidebar} from './index'
import Routes from '../routes'

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
  align-items: center;
`
const StyledBottomMessageColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`

const StyledBottomMessageText = styled.div`
  justify-content: center;
  align-self: center;
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

const MobileApp = (props) => {
  return (
    <div>
       <div>
         <div>
         <StyledGridContainer container 
         >
           <CssBaseline />
           <StyledGridItem item 
             xs={12}
           >
             <StyledFrontpageDiv>
               <Routes />
             </StyledFrontpageDiv>
             <StyledBottomMessage>
               <StyledBottomMessageColumn>
               <StyledBottomMessageText>
                 Website built on Node.js, Express, React & Redux, PostgresQL/Sequelize: &nbsp;
               </StyledBottomMessageText>  
               <StyledBottomMessageText>  
                 (I will update with fancy graphics soon, please be patient!)
               </StyledBottomMessageText>  
               </StyledBottomMessageColumn>
             </StyledBottomMessage>
           </StyledGridItem>
         </StyledGridContainer>
         </div>
       </div>
    </div>
  )
}


export default MobileApp
