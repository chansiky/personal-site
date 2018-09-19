import React from 'react'
import {Emoji, Body} from './index'
import styled from 'styled-components'

const StyledFrontPageDiv = styled.div`
`

class FrontPage extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <StyledFrontPageDiv>
        <Emoji />
        <Body />
      </StyledFrontPageDiv>
    )
  }
}

export default FrontPage
