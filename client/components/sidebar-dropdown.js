import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {StyledLinkText} from '../style'
import { withStyles } from '@material-ui/core/styles';
import './sidebar-dropdown.css'

const StyledSidebarDropdownDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
`

const styles = {
  root: {
    flexGrow: 1,
    position: 'fixed',
    variant: 'dense',
  },
};

class SidebarDropdown extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      expanded : this.props.expanded || false
    }
    this.toggleExapand = this.toggleExpand.bind(this)
  }
  toggleExpand = (event) => {
    this.setState({expanded: !this.state.expanded})
  }
  getDropdownClassName(){
    return this.state.expanded
      ? "showDropdown"
      : "hideDropdown";
  }

  hoverFadeIn(event){
    console.log('hoverTest &', event)
  }

  render(){
    const{ classes } = this.props;
    const list = (this.props.content && this.props.content.length > 0) ?
      <div> 
        {this.props.content.map((elem) => {
          return(
              <Typography 
                key={elem.id} 
                variant="subheading" 
                gutterBottom={true}
              > 
                <StyledLinkText href={elem.url} target={elem.openInNew || "_blank"}>
                  {elem.title}
                </StyledLinkText>
              </Typography>
          )
        })}
      </div> :
      <Typography 
        variant="caption" 
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
            <div className={`${this.getDropdownClassName()}`}> 
            {(this.props.content && this.props.content.length > 0) ?
              <div> 
                {this.props.content.map((elem) => {
                  return(
                      <Typography 
                        key={elem.id} 
                        variant="subheading" 
                        gutterBottom={true}
                      > 
                        <StyledLinkText href={elem.url} target="_blank">
                          {elem.title}
                        </StyledLinkText>
                      </Typography>
                  )
                })}
              </div> :
              <Typography 
                variant="caption" 
              > 
                no {this.props.title.toLowerCase()} in the database
              </Typography>}

            </div>

          </Grid>
        </Grid>
      </StyledSidebarDropdownDiv>
    )
  }
}

export default withStyles(styles)(SidebarDropdown)

/*
{(this.state.expanded) && list }
*/
