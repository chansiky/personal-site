import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PROJECTS = 'GET_PROJECTS'

/**
 * INITIAL STATE
 */
const defaultProjects = {
  projectList: []
}

/**
 * ACTION CREATORS
 */
const getProjects = projectList => ({
  type: GET_PROJECTS, 
  projectList
})

/**
 * THUNK CREATORS
 */

export const dispatchGetProjectList = () => {
  return async (dispatch) => {
    try {
      console.log('getting project list')
      const res = await axios.get(`api/projects/list/`)
      //res should be a list of the projects
      console.log(res.data)
      dispatch(getProjects(res.data))
    } catch (err) {
      console.error(err)
    }
  }
}

/**
 * REDUCER
 */
export default function(state = defaultProjects, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {state, projectList : action.projectList}
    default:
      return state
  }
}
