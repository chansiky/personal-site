import React from 'react'
import {Emoji, Body} from './index'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

const StyledFrontPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
`


class FrontPage extends React.Component{
  constructor(props){
    super(props)
  }

  render(props){
    return(
      <StyledFrontPageDiv>
        {!(this.props.mobile) ?
          <Emoji /> :
          <br/>
        }
        <Body />
      </StyledFrontPageDiv>
    )
  }
}

const mapState = (store) => {
  return {
    mobile: store.appState.mobile,
  }
}



export default connect(mapState, null)(withRouter(FrontPage))
