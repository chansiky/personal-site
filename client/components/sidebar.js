import React from 'react'
import {SidebarDropdown} from './index'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {getProjectsList, getPostsList} from '../store' 
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import HomeIcon from '@material-ui/icons/Home';
import {StyledReactRouterLink} from '../style'

/*
things to include in about: things that let the other person know who you are:
-book collection
-everyday carry
-experimentations, including eyesight
*/

const StyledColumnAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const StyledSidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  width: 7em;
`
const StyledImg = styled.img`
  margin-top: 50px;
  width: 100%;
  maxWidth: 300px;
  height: auto;
`

class Sidebar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      contact: [{
      id: 0,
      title: "linkedIn",
      url: "http://www.linkedin.com/in/chansiky"
    },
    {
      id:1,
      title: "github",
      url: "http://www.github.com/chansiky"
    }],
    }
  }

  async componentDidMount(){
    await this.props.setProjectsList()
    await this.props.setPostsList()
  }

  render(props){
    return(
      <div>
        <StyledSidebarDiv>
          {!(this.props.mobile) ?
            <Link to={'/'}>
              <StyledImg src="ChanSikYoun-NavyPier.jpg" alt="Chan Youn, the greatest ever.(<--period)"/>
              <br/>
              <br/>
            </Link> :
            <br/>
          }
          <StyledReactRouterLink to={'/'}>
            <HomeIcon alignitem="center"/>
          </StyledReactRouterLink>
          <br/>
          <SidebarDropdown  title='Projects'  content={this.props.projectsList} />
          <SidebarDropdown  title='Posts'     content={this.props.postsList} />
          <SidebarDropdown  title='Past Work' content={this.state.pastWork} />
          <Link to={`/about`}>
            <Typography variant='title' gutterBottom={true}>
              About
            </Typography>
          </Link>
          <SidebarDropdown  title='Contact'  content={this.state.contact} expanded={!this.props.mobile} />
        </StyledSidebarDiv>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    mobile: store.appState.mobile,
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
