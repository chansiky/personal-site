import React from 'react'
import styled from 'styled-components'

const StyledDivTopic = styled.div`
    cursor: 'pointer';
    background-color: 'purple';
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
      <div >
        <h4 onClick={this.toggleExpand} >
          {this.props.title}
        </h4>
        {this.state.expanded && this.props.content.map((a) => {
          <div >
            a.title
          </div>
        })}
      </div>
    )
  }
}

export default SidebarDropdown
