import React from 'react'
import {SidebarDropdown} from './index'

const styles = {
  container: {
    display: 'flex',
    padding: 20
  }
}

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
      <div style={styles.containter}>
       <img src="ChanSikYounTheGreat.jpg" alt="Chan Youn, the greatest ever.(<--period)"/>
        <SidebarDropdown title='Projects' content={this.state.projects} />
        <SidebarDropdown title='Posts'    content={this.state.posts} />
        <SidebarDropdown title='Past Work' content={this.state.pastWork} />
      </div>
    )
  }
}


export default Sidebar


/*
*/
