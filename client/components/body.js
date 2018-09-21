import React from 'react'
import {Link} from 'react-router-dom'
import {Intro, AboutMe} from '../content'
import {Button} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import {StyledLinkText, StyledReactRouterLink} from '../style'
import {getProjectsAll} from '../store' 
import {ProjectsCardList} from './index'

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
          Check out a few of my projects:
        </Typography>

        <br/>
        <br/>

        <ProjectsCardList />
 
      </div>
    )
  }
} 

export default Body
