import React from 'react'
import {SidebarDropdown} from './index'
import { withStyles } from '@material-ui/core/styles'
import styleRef from '../styleRef'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontColor: styleRef.colorPurple
  },
  img: {
    padding: styleRef.padding,
     width: '450px',
     maxWidth: '100%', 
     maxHeight: '450px', 
  },
  table: {
    padding: styleRef.padding,
    fontColor: styleRef.colorBlue
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
    console.log(styleRef)
  }
  render(){
    return(
      <div style={styles.containter}>
        <img style={styles.img} src="ChanSikYounTheGreat.jpg" alt="Chan Youn, the greatest ever.(<--period)"/>
        <SidebarDropdown  title='Projects'  content={this.state.projects} />
        <SidebarDropdown  title='Posts'     content={this.state.posts} />
        <SidebarDropdown  title='Past Work' content={this.state.pastWork} />
      </div>
    )
  }
}

export default withStyles(styles)(Sidebar)
