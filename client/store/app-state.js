//initial state
const initialAppState = {
  mobile: false
}

//action name
const SET_MOBILE = 'SET_MOBILE'

//action creator
const setMobile = (mobile) => {
  return ({
    type: SET_MOBILE,
    mobile
  })
}

//thunk creator
export const setMobileThunk = (mobileState) => {
  return (dispatch) => {
    dispatch(setMobile(mobileState))
  }
}


//reducer
export default function(state = initialAppState, action){
  switch (action.type){
    case SET_MOBILE: 
      return {...state, mobile: action.mobile}
    default:
      return state
  }
}
