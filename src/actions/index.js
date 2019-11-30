import { ADD_CITY, UPDATE_USER_DETAILS } from '../action-types'

/*
Actions return objects. We're able return functions because of redux-thunk.

export const fetch = (name) => (dispatch, getState) => ({
  type: ADD_CITY
})
*/

export const addCity = city => ({
  type: ADD_CITY, 
  payload: city
})

export const fetchUserDetails = () => (dispatch, getState) => {
  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(r => r.json())
  .then(resp => {
    dispatch({ type: UPDATE_USER_DETAILS, payload: resp })
  })
  .catch(console.log)
}
