import React from 'react'
import styled from 'styled-components'
import {
  Body,
  TopBar
  } from './index'

const StyledFrontpageDiv = styled.div`
  padding: 50px;
  background-color: yellow;
`

class FrontPage extends React.Component {

  constructor(props){
    super(props)
  }
  render(){
    return(
      <StyledFrontpageDiv>
        <TopBar />
        <Body />
      </StyledFrontpageDiv>

    )
  }
}

export default FrontPage
