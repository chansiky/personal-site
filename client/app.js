import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import {Navbar, SideBar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <CssBaseline />
      <SideBar />
      <Routes />
    </div>
  )
}

export default App
