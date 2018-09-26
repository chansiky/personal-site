import React from 'react'
import {Emoji} from './index'
import {StyledLinkText, StyledReactRouterLink} from '../style'
import {connect} from 'react-redux'

//how did you get into programming

const VimPage = (props) => {
  return (
    <div>
       {!(props.mobile) ?
         <Emoji /> :
         <br/>
       }
      <h1>
        I Love VIM!
      </h1>
      <p>
        VIM is awesome.  Maybe I'll write an article on it when I have more time someday.
      </p>

      <p>
        For now, if you want to learn, I'd suggest using a VIM/style plugin for your browser to get accustomed to the motions.  For example:
      </p>
      <p>
        <StyledLinkText href="https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb?hl=en" target="_blank">
          Vimium for Chrome
        </StyledLinkText>
      </p>
      <p>
        <StyledLinkText href="https://chrome.google.com/webstore/detail/surfingkeys/gfbliohnnapiefjpjlpjnehglfpaknnc" target="_blank">
          Surfing Keys for Chrome
        </StyledLinkText>
      </p>
      <p>
        Oh and here are my VIM settings if you're curious: &nbsp;
        <StyledLinkText href="https://github.com/chansiky/settings-vim/blob/master/init.vim" target="_blank">
          Settings for nVim
        </StyledLinkText>
      </p>
    </div>
  )
}

const mapState = (store) => {
  return {
    mobile: store.appState.mobile,
  }
}

export default connect(mapState, null)(VimPage)
