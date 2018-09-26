import React from 'react'
import {Emoji, Body} from './index'
import styled from 'styled-components'
import {connect} from 'react-redux'

const StyledFrontPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
`


class FrontPage extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
  }

  render(props){
    return(
      <StyledFrontPageDiv>
        <Emoji />
        <Body />
      </StyledFrontPageDiv>
    )
  }
}

mapState = (state) => {
  return {
    
  }
}



export default connect(mapState,)(FrontPage)
