import React from 'react'
import {connect} from 'react-redux'
import {Emoji} from './index'

//how did you get into programming

const AboutPage = (props) => {
  return (
    <div>
       {!(props.mobile) ?
         <Emoji /> :
         <br/>
       }
      <h1>
        Who is Chan(sik) Youn?
      </h1>
      <p>
        So a little about myself, glad that you're interested.
      </p>
      <p>
        I began coding when a friend introduced me to programming when I was in Grad School...
      </p>
      <p>
        Story will continue, promise, too busy studying/coding/sending out job applications! -_-

      </p>
    </div>
  )
}

const mapState = (store) => {
  return {
    mobile: store.appState.mobile,
  }
}

export default connect(mapState, null)(AboutPage)
