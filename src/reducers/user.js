import { UPDATE_USER_DETAILS } from "../action-types";

const initialState = {
  name: 'Faiyaz Shaikh',
  username: 'takkar',
  dob: '09-09-1998',
  age: 21,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_DETAILS:
      return {
        ...state,
        ...action.payload
      }
  
    default:
      return state
  }
}