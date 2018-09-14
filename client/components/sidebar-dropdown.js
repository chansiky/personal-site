import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const StyledSidebarDropdownDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
`

const StyledProjectsListDiv = styled.div`
`

const StyledContentItemDiv = styled.div`

`
class SidebarDropdown extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      expanded : false
    }
    this.toggleExapand = this.toggleExpand.bind(this)
  }
  toggleExpand = (event) => {
    this.setState({expanded: !this.state.expanded})
  }

  render(){
    const list = (this.props.content.length > 0) ?
      <div> 
        {this.props.content.map((elem) => {
          return(
            <Typography 
              key={elem.id} 
              variant="subheading" 
              gutterBottom={true}
            > 
              {elem.title}
            </Typography>
          )
        })}
      </div> :
      <Typography 
        variant="subheading" 
      > 
        no {this.props.title.toLowerCase()} in the database
      </Typography>       

    return(
      <StyledSidebarDropdownDiv >
        <Typography variant='title' gutterBottom={true} onClick={this.toggleExpand} >
          {this.props.title}
        </Typography>
        <Grid container>
          <Grid item xs={1}/> 
          <Grid item xs={10}> 
            {(this.state.expanded) && list }
          </Grid>
        </Grid>
      </StyledSidebarDropdownDiv>
    )
  }
}

export default SidebarDropdown

/*
*/