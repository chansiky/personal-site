import React from 'react'
import {SidebarDropdown} from './index'
import styled from 'styled-components'

const StyledSidebarDiv = styled.div`
  padding: 50px;
  background-color: firebrick;
`
const StyledImg = styled.img`
  width: 100%;
  maxWidth: 500px;
  height: auto;
`

class Sidebar extends React.Component{
  constructor(){
    super()
    this.state = {
      projects: [],
      posts:  [],
      pastWork: [],
    }
  }
  render(){
    return(
      <StyledSidebarDiv>
        <StyledImg src="ChanSikYounTheGreat.jpg" alt="Chan Youn, the greatest ever.(<--period)"/>
        <SidebarDropdown  title='Projects'  content={this.state.projects} />
        <SidebarDropdown  title='Posts'     content={this.state.posts} />
        <SidebarDropdown  title='Past Work' content={this.state.pastWork} />
        <div>
          About
        </div>
        <div>
          Contact:
        </div>
        <div>
          github
        </div>
        <div>
          linkedIn
        </div>

      </StyledSidebarDiv>
    )
  }
}

export default Sidebar
