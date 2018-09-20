import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import {Sidebar} from './index'
import Routes from '../routes'

const StyledApp = styled.div`
  background-image: url("DotGrid-5x5.png");
  background-repeat: repeat;
  background-size: 50px;
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

const MobileApp = (props) => {
  console.log('App props are: ',props)
  return (
    <div>
       <StyledApp>
         <div background-color='red'>
           <div>
           <StyledGridContainer container 
           >
             <CssBaseline />
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
           </StyledGridContainer>
           </div>
         </div>
       </StyledApp> }
    </div>
  )
}


export default MobileApp
