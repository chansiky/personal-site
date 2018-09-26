import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { StyledLinkText } from './style'
import withWidth from'@material-ui/core/withWidth'
import {Navbar, Sidebar, WebApp, MobileApp, SimpleAppBar} from './components'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {grey, lime} from '@material-ui/core/colors/'
import {connect} from 'react-redux'
import {setMobileThunk} from './store'
import {Router} from 'react-router'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'

const StyledApp = styled.div`
  background-image: url("DotGrid-5x5.png");
  background-repeat: repeat;
  background-size: 50px;
  height: 140vh;
`

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lime[200],
    },
    secondary: {
      light: '#0066ff',
      main: '#c8efff',
      contrastText: '#ffcc00',
    },
  },
});


const App = (props) => {
  if (props.width === 'sm' || props.width === 'xs') {
    props.setMobile(true)
  } else{
    props.setMobile(false)
  }

  return (
    <div>
      <CssBaseline />
      <MuiThemeProvider theme={theme} >
        <StyledApp>
          { (props.mobile) ?
               <div>
                 <SimpleAppBar/>
                 <MobileApp/> 
               </div> :
               <WebApp/>
          }
        </StyledApp>
      </MuiThemeProvider>
    </div>
  )
}

const mapState = (store) => {
  return ({
    mobile: store.appState.mobile
  })
}

const mapDispatch = (dispatch) => {
  return({
    setMobile: (mobileState) => dispatch(setMobileThunk(mobileState))  
  })
}

export default withRouter(withWidth()(connect(mapState,mapDispatch)(App)))
