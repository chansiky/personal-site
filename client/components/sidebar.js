import React from 'react'
import {SidebarDropdown} from './index'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {getProjectsList, getPostsList} from '../store' 
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const StyledSidebarDiv = styled.div`
  padding: 20px;
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

  async componentDidMount(){
    console.log('setting Projects list')
    await this.props.setProjectsList()
    console.log('setting Posts list')
    await this.props.setPostsList()
  }

  render(){
    console.log(this.props)
    return(
      <StyledSidebarDiv>
          <br/>
          <br/>
        <Link to={'/'}>
          <StyledImg src="ChanSikYounTheGreatestInTheWorld.jpg" alt="Chan Youn, the greatest ever.(<--period)"/>
          <br/>
          <br/>
          <Typography variant='title' gutterBottom={true}>
            Home
          </Typography>
        </Link>
        <SidebarDropdown  title='Projects'  content={this.props.projectsList} />
        <SidebarDropdown  title='Posts'     content={this.props.postsList} />
        <SidebarDropdown  title='Past Work' content={this.state.pastWork} />
        <Link to={`/about`}>
          <Typography variant='title' gutterBottom={true}>
            About
          </Typography>
        </Link>
        <Typography variant='title' gutterBottom={true}>
          Contact:
        </Typography>
        <Grid container>
          <Grid item xs={1}/> 
          <Grid item xs={10}> 
            <a href="http://www.github.com/chansiky" target="_blank">
              <Typography variant="subheading" gutterBottom={true} > 
                github
              </Typography>
            </a>
            <a href="http://www.linkedin.com/in/chansiky" target="_blank">
              <Typography variant="subheading" gutterBottom={true}> 
                linkedIn
              </Typography>
            </a>
          </Grid>
        </Grid>
      </StyledSidebarDiv>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    projectsList: store.projects.projectsList,
    postsList: store.posts.postsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    setProjectsList: () => {
        return  dispatch(getProjectsList())
      },
    setPostsList: () => {
        return  dispatch(getPostsList())
      }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
