import React from 'react'
import {Link} from 'react-router-dom'
import {Intro, AboutMe} from '../content'
import {Button} from '@material-ui/core'

class Body extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      projects: []
    }
  }

  render(){
    return (
      <div>
        <p>
          {Intro}
        </p>
        <p>
          check out a few of my projects:
        </p>

        <p>
          <a href="http://code-map.herokuapp.com">Code-Map</a>
        </p>
        <p>
          <a href="https://github.com/code-map/capstone-1804">Github</a>
        </p>

        <p>
          <a href="http://eaglefox-shopper.herokuapp.com">EagleFox Shopper</a>
        </p>
        <p>
          <a href="https://github.com/EagleFox-Grace-Shopper">Github</a>
        </p>

        <p>
          <a href="http://drawRTC.herokuapp.com">drawRTC</a>
        </p>
        <p>
          <a href="https://github.com/chansiky/chatterbox">Github</a>
        </p>

        <p>
          {AboutMe}
        </p>
      </div>
    )
  }
} 

export default Body
