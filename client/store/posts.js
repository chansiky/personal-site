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
      console.log('getting postsList')
      const res = await axios.get('/api/posts/list')
      dispatch(setPostsList(res.data))
    }catch (err) {
      console.err
    }
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch(action.type){
    case SET_POSTS_LIST:
      console.log('posts reducer',action)
      return { ...state, postsList : action.postsList }
    default:
      return state
  }
}
