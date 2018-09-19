import React from 'react'
import {Emoji} from './index'

//how did you get into programming

const VimPage = (props) => {
  return (
    <div>
      <Emoji />
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
        <a href="https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb?hl=en" target="_blank">
          Vimium for Chrome
        </a>
      </p>
      <p>
        <a href="https://chrome.google.com/webstore/detail/surfingkeys/gfbliohnnapiefjpjlpjnehglfpaknnc" target="_blank">
          Surfing Keys for Chrome
        </a>
      </p>
      <p>
        Oh and here are my VIM settings if you're curious: &nbsp;
        <a href="https://github.com/chansiky/settings-vim/blob/master/init.vim" target="_blank">
          Settings for nVim
        </a>
      </p>
    </div>
  )
}


export default VimPage
