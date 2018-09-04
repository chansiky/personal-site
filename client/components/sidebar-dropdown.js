import React from 'react'

const styles = {
  topic: {
    cursor: 'pointer'
  }
}

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
      <div style={styles.topic}>
        <h1 onClick={this.toggleExpand} >
          {this.props.title}
        </h1>
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
