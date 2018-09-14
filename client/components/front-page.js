import React from 'react'
import {Emoji, Body} from './index'


class FrontPage extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <Emoji />
        <Body />
      </div>
    )
  }
}

export default FrontPage
