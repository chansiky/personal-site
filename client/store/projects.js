import axios from 'axios'

//ACTION TYPES
const SET_PROJECTS = 'SET_PROJECTS'
const SET_PROJECTS_ALL = 'SET_PROJECTS_ALL'

//INITIAL STATE
const initialState = {
  projectsList: [],
  projectsAll: []
}

//ACTION CREATORS
const setProjectsList = ( projectsList ) => ({
  type: SET_PROJECTS, 
  projectsList
})

const setProjectsAll = ( projectsAll ) => ({
  type: SET_PROJECTS_ALL, 
  projectsAll
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

export const getProjectsAll = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`api/projects/all/`)
      dispatch(setProjectsAll(res.data))
    } catch (err) {
      console.error(err)
    }
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return {...state, projectsList : action.projectsList}
    case SET_PROJECTS_ALL:
      return {...state, projectsAll : action.projectsAll}
    default:
      return state
  }
}
