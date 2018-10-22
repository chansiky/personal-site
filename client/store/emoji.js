/**
*  EMOJI_STATES are the varying types of sttes that an emoji can become.
*  @prop {frequency} - think of frequncy like the number of raffles that get placed 
*        in a bowl.  The winning number
*  @prop {duration}  - is in milliseconds
*/
const EMOJI_STATES = [  
  {
    face: "o_o",
    frequency : 10,
    duration : 5000
  },
  {
    face: "-_-",
    frequency : 8,
    duration : 800
  },
  {
    face: ">_<",
    frequency : 3,
    duration : 800
  },
  {
    face: "o_-",
    frequency : 1,
    duration : 800
  },
  {
    face: "o_O",
    frequency : 1,
    duration : 800
  },
  {
    face: "O_o",
    frequency : 1,
    duration : 800
  }
]

//add ids to every emoji
const EMOJI_STATES_ID = EMOJI_STATES.map( (elem, ind) => {
    elem.id = ind
    return elem
  }
)

const CHANGE_EMOJI = "CHANGE_EMOJI"

const setEmojiAC = (emoji) => {
  return {
    type : CHANGE_EMOJI,
    emoji
  }
}

const initialState = {
  emoji : EMOJI_STATES_ID[0]
}

export const changeEmoji = (currId) => {
  //this will make the next Emoji 
  if(currId !== 0){
    return setEmojiAC(EMOJI_STATES_ID[0])
  }
  
  const emojis = EMOJI_STATES_ID
    .filter((curr, ind) => ind !== currId)

  const totalFrequencyCount = emojis.reduce((acc,elem) => {
    acc += elem.frequency
    return acc
    }, 0)
  

  let chosenRaffle = Math.floor(Math.random()*totalFrequencyCount)
  let j = -1

  while(chosenRaffle >= 0) {
    j++
    chosenRaffle -= emojis[j].frequency
  }
  return setEmojiAC(emojis[j])
}

export default function(state = initialState, action) {
  switch(action.type){
    case CHANGE_EMOJI:
      return {...state, emoji : action.emoji}
    default:
      return state
  }
}
