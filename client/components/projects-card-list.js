import React from 'react'
import {MediaCard} from './index'
import {getProjectsAll} from '../store' 
import {connect} from 'react-redux'

class ProjectsCardList extends React.Component{
  constructor(props){
    super(props)

  }
  
  async componentDidMount(){
    await this.props.setProjectsAll();
  }

  render(){
    return(
      <div>
        {this.props.projectsAll.map((elem) => {
          return(
            <div key={elem.id}>
            <MediaCard title={elem.title} image={elem.media} descripion={elem.description} source={elem.source} url={elem.url}/>
            <br/>
            </div>
          )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    projectsAll: store.projects.projectsAll,
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    setProjectsAll: () => {
        return  dispatch(getProjectsAll())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsCardList)
