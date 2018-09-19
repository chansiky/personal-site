import React from 'react'
import {Emoji, Body} from './index'
import styled from 'styled-components'

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
