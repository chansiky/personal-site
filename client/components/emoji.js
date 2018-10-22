import React from 'react'
import {connect} from 'react-redux'
import {changeEmoji} from '../store'

class Emoji extends React.Component {
  constructor(props){
    super(props)
    this.changeEmoji = this.changeEmoji.bind(this)
    this.timeoutID = undefined 
  }

  componentDidMount(){
    this.timeoutID = setTimeout(this.changeEmoji(this.props.emoji.id),this.props.emoji.duration)
  }
  
  componentWillUnmount(){
    if(this.timeoutID) {
      clearTimeout(this.timeoutID)
    }
    this.timeoutID = undefined
  }

  changeEmoji(){
    this.props.changeEmoji(this.props.emoji.id)
    this.timeoutID = setTimeout(()=> {this.changeEmoji(this.props.emoji.id)}, this.props.emoji.duration) 
  }

  random(min,max){
    return Math.floor(Math.random() * (max-min) + min)
  }
  
  render(props){
    return(
      <div>
        <h2 textalign='center'>
          <font face='courier new'>
            {this.props.emoji.face}
          </font>
        </h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    emoji : state.emoji.emoji
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeEmoji: (id) => dispatch(changeEmoji(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Emoji)
