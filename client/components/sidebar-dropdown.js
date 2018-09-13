import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledSidebarDropdownDiv = styled.div`
  cursor: pointer;
  background-color: 'purple';
  justify-content: flex-end;
`

const StyledProjectsListDiv = styled.div`
  justify-content='flex-end';
  background-color: 'teal';
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
/*
    const list = (this.props.content.length > 0) ?
      this.props.content.map((elem) => {
        <div> {elem.title} </div>
      }) :
      <div> no {this.props.title.toLowerCase()} currently in the database </div>       
    
*/
    const list = ['a','b','c'].map((elem) => {
      return <div> {elem} </div>
    })
    return(
      <StyledSidebarDropdownDiv >
        <h4 onClick={this.toggleExpand} >
          {this.props.title}
        </h4>
          {(this.state.expanded) && list }
      </StyledSidebarDropdownDiv>
    )
  }
}

export default SidebarDropdown

/*
if(this.state.expanded){
            (this.props.content.length > 0) ?
              this.props.content.map((a) => {
                <StyledProjectsListDiv >
                  &nbsp a.title
                </StyledProjectsListDiv>
              }) :
              <StyledProjectsListDiv > no {this.props.title}  in the directory </StyledProjectsListDiv>
}
*/
