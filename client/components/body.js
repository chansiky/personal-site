import React from 'react'
import {Link} from 'react-router-dom'
import {Intro, AboutMe} from '../content'
import {Button} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

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
        <h1>
          Hey there.
        </h1>
        <p>
Hi, I'm Chan Youn.  I'm a former architectural designer turned software developer.  I like programming in Javascript, Java, Python, and C#.  I love React and Redux, I love love love <Link to="/vim">VIM</Link>.  I've also experimented with coding in C++17, Golang, and Ruby.
        </p>
        <br/>
        <Typography variant='subheading' >
          check out a few of my projects!
        </Typography>

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
      </div>
    )
  }
} 

export default Body
