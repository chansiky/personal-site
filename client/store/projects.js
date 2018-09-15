import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PROJECTS = 'GET_PROJECTS'

/**
 * INITIAL STATE
 */
const initialState = {
  projectsList: []
}

/**
 * ACTION CREATORS
 */
const getProjects = ( projectsList ) => ({
  type: GET_PROJECTS, 
  projectsList
})

/**
 * THUNK CREATORS
 */

export const getProjectsList = () => {
  return async (dispatch) => {
    try {
      console.log('getting project list')
      const res = await axios.get(`api/projects/list/`)
      //res should be a list of the projects
      dispatch(getProjects(res))
    } catch (err) {
      console.error(err)
    }
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {...state, projectsList : action.projectsList}
    default:
      return state
  }
}
