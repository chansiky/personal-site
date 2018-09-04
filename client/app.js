import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid';

import {Navbar, Sidebar} from './components'
import Routes from './routes'

const styles = {
  container : {
    justifyContent : 'flex-start',
    flexDirection: 'row'
  },
  sidebar : {
  },
  main: {
  }

}

const App = () => {
  return (
    <div>
      <Grid container 
        styles={styles.container}
        spacing={12}
      >
        <CssBaseline />
        
        <Grid item 
          styles={styles.sidebar}
          xs={3}
        >
          <Sidebar />
        </Grid>
        <Grid item 
          styles={styles.main}
          xs={6}
        >
          <Routes />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
