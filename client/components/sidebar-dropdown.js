import React from 'react'
import styled from 'styled-components'

const StyledSidebarDropdownDiv = styled.div`
    cursor: 'pointer';
    background-color: 'purple';
    justify-content: flex-end;
`

class SidebarDropdown extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      expanded : true
    }
    this.toggleExapand = this.toggleExpand.bind(this)
  }
  toggleExpand = (event) => {
    this.setState({expanded: !this.state.expanded})
  }

  render(){
    return(
      <StyledSidebarDropdownDiv >
        <h4 onClick={this.toggleExpand} >
          {this.props.title}
        </h4>
        {this.state.expanded && this.props.content.map((a) => {
          <div justify-content='flex-end'>
            a.title
          </div>
        })}
      </StyledSidebarDropdownDiv>
    )
  }
}

export default SidebarDropdown
