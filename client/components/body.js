import React from 'react'
import {Link} from 'react-router-dom'
import {Intro, AboutMe} from '../content'

class Body extends React.Component{
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
          <a href="http://eaglefox-shopper.herokuapp.com">EagleFox Shopper</a>
        </p>
        <p>
          <a href="http://drawRTC.herokuapp.com">drawRTC</a>
        </p>
        <p>
          {AboutMe}
        </p>
      </div>
    )
  }
} 

export default Body
