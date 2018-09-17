import axios from 'axios'
//initial state
let initialPastWorks = {pastWorks: []}

//action name
const SET_PAST_WORKS = 'SET_PAST_WORKS'

//action creator
const setPastWorks = (pastWorks) =>{
  return {
    type : SET_PAST_WORKS,
    pastWorks
  }
}

//thunk creator
//call to back-end api
export getPastWorks = () => {
  try{
  return async (dispatch) => {
    const res = axios.get('/api/pastWorks/list/')
    dispatch(setPastWorks(res.data))
  }}
  catch(e){
    console.error(e)
  }
}

//reducer
const reducer = (state = initialPastWorks, action) => {
  switch(action.type){
    case SET_PAST_WORKS: 
      return { ...state, pastWorks : action.pastWorks }
    default:
      return state
  }
}


