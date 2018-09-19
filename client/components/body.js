import React from 'react'
import {Link} from 'react-router-dom'
import {Intro, AboutMe} from '../content'
import {Button} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import {StyledLinkText, StyledReactRouterLink} from '../style'

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
Hi, I'm Chan Youn.  I'm a former architectural designer turned software developer.  I like programming in Javascript, Java, Python, and C#.  I think React / Redux is amazing, I love <StyledReactRouterLink to="/vim">VIM</StyledReactRouterLink>.  I've also experimented with coding in C++17, Golang, and Ruby.
        </p>
        <br/>
        <Typography variant='subheading' >
          Check out a few of my projects!
        </Typography>

        <br/>

        <p>
          <StyledLinkText href="http://code-map.herokuapp.com">Code-Map</StyledLinkText>
        </p>
        <p>
          <StyledLinkText href="https://github.com/code-map/capstone-1804">Github</StyledLinkText>
        </p>
        <br/>

        <p>
          <StyledLinkText href="http://eaglefox-shopper.herokuapp.com">EagleFox Shopper</StyledLinkText>
        </p>
        <p>
          <StyledLinkText href="https://github.com/EagleFox-Grace-Shopper">Github</StyledLinkText>
        </p>
        <br/>


        <p>
          <StyledLinkText href="http://drawRTC.herokuapp.com">drawRTC</StyledLinkText>
        </p>
        <p>
          <StyledLinkText href="https://github.com/chansiky/chatterbox">Github</StyledLinkText>
        </p>
      </div>
    )
  }
} 

export default Body
