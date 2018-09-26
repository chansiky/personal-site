import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { StyledLinkText } from './style'
import withWidth from'@material-ui/core/withWidth'
import {Navbar, Sidebar, WebApp, MobileApp, SimpleAppBar} from './components'
import Routes from './routes'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {grey, lime} from '@material-ui/core/colors/';

const StyledApp = styled.div`
  background-image: url("DotGrid-5x5.png");
  background-repeat: repeat;
  background-size: 50px;
  height: 140vh;
`

/*
const theme = createMuiTheme({
palette: {
//type: 'light',
primary: {
main: '#ffffff',
},
secondary: {
main: '##c8efff',
}
}
})
*/

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: lime[200],
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#c8efff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});


const App = (props) => {
  return (
    <div>
      <CssBaseline />
      <MuiThemeProvider theme={theme} >
        <StyledApp>
          {
            (props.width === 'sm' || props.width === 'xs') ?
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


export default withWidth()(App);
