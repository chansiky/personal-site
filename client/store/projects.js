import axios from 'axios'

//ACTION TYPES
const SET_PROJECTS = 'SET_PROJECTS'

//INITIAL STATE
const initialState = {
  projectsList: []
}

//ACTION CREATORS
const setProjectsList = ( projectsList ) => ({
  type: SET_PROJECTS, 
  projectsList
})

//THUNK CREATORS
export const getProjectsList = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`api/projects/list/`)
      dispatch(setProjectsList(res.data))
    } catch (err) {
      console.error(err)
    }
  }
}


//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      console.log('Projects reducer',action)
      return {...state, projectsList : action.projectsList}
    default:
      return state
  }
}
