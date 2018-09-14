import React from 'react'

class Emoji extends React.Component {
  constructor(props){
    super(props)
    this.emojis = [
      'o_o',
      '-_-',
      '-_-',
      '-_-',
      '-_-',
      '-_-',
      '-_-',
      '-_-',
      '-_-',
      '>_<',
      '>_<',
      '>_<',
      '^_^',
      'o_-',
      'o_O',
      'O_o',
    ]
    this.state = {
      emoji : 0
    }
    this.changeEmoji = this.changeEmoji.bind(this)
  }


  componentDidMount(){
    this.setState({
      emoji : 0
    })
    this.changeEmoji()
  }
  
  changeEmoji(){
    this.setState({
      emoji: this.random(0, this.emojis.length)
    })
    setTimeout(()=> {this.changeEmojiNormal()}, this.random(600,1000)) 
  }

  changeEmojiNormal(){
    this.setState({
      emoji: 0
    })
    setTimeout(()=> {this.changeEmoji()}, this.random(4000,6000))
  }

  random(min,max){
    return Math.floor(Math.random() * (max-min) + min)
  }
  
  render(){
    return(
      <div>
        <h2>
          <font face='courier new'>
            {this.emojis[this.state.emoji]}
          </font>
        </h2>
      </div>
    )
  }
}

export default Emoji
