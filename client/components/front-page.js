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
      <h1>
        hello world
      </h1>
      <TopBar />
      <Body />
    </div>

    )
  }
}

export default FrontPage
