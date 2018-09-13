import React from 'react'
import {SidebarDropdown} from './index'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {dispatchGetProjectList} from '../store' 
import {connect} from 'react-redux'

const StyledSidebarDiv = styled.div`
  padding: 50px;
  background-color: ivory;
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
    console.log('testing')
  }
  componentDidMount(){
    this.props.getProjectList()
  }
  render(){
    return(
      <StyledSidebarDiv>
        <StyledImg src="ChanSikYounTheGreat.jpg" alt="Chan Youn, the greatest ever.(<--period)"/>
        <SidebarDropdown  title='Projects'  content={this.props.projects} />
        <SidebarDropdown  title='Posts'     content={this.state.posts} />
        <SidebarDropdown  title='Past Work' content={this.state.pastWork} />
        <h4>
          About
        </h4>
        <h4>
          Contact:
        </h4>
        <a href="www.github.com/chansiky">
          <div >
            github
          </div>
        </a>
        <a href="www.linkedin.com/in/chansiky">
          <div>
            linkedIn
          </div>
        </a>
      </StyledSidebarDiv>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    projectsList: store.projects.projectList
  }
}




const mapDispatchToProps = (dispatch) => {
  return {
    getProjectList: () => dispatch(dispatchGetProjectList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
