import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import projects from './projects'
import posts from './posts'
import appState from './app-state'

const reducer = combineReducers({
    projects, 
    posts,
    appState
  })

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './projects'
export * from './posts'
export * from './app-state'
