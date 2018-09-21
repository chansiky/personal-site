import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { StyledLinkText } from './style'
import withWidth from'@material-ui/core/withWidth'
import {Navbar, Sidebar, WebApp, MobileApp} from './components'
import Routes from './routes'

const StyledApp = styled.div`
  background-image: url("DotGrid-5x5.png");
  background-repeat: repeat;
  background-size: 50px;
  height: 120vh;
`
const App = (props) => {
  return (
    <div>
    <CssBaseline />
      <StyledApp>
        {
          (props.width === 'sm' || props.width === 'xs') ?
             <MobileApp/> :
             <WebApp/>
        }
      </StyledApp>
    </div>
  )
}


export default withWidth()(App);
