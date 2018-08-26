import React from 'react'
import {
  Body,
  TopBar
  } from './index'

class FrontPage extends React.Component {

  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <TopBar />
        <Body />
      </div>

    )
  }
}

export default FrontPage
