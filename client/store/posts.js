import axios from 'axios'
//INITIAL STATE
const initialState = {
  postsList: []
}

//ACTION TITLE
const SET_POSTS_LIST = 'SET_POSTS_LIST'

//ACTION CREATOR
const setPostsList = (postsList) =>{
  type: SET_POSTS_LIST,
  postsList
}

//THUNK CREATORs
export const getPostsList = () => {
  return async (dispatch) => {
    try{
      const res = axios.get('/api/posts')
      dispatch(setPostsList(res))
    }catch (err) {
      console.err
    }
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch(action.type){
    case SET_POSTS_LIST:
      return { ...state, postsList : action.postsList }
    default:
      return state
  }
}
