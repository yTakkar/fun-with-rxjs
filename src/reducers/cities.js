import { ADD_CITY } from "../action-types";

const initialState = [
  'Mumbai',
  'Vienna',
  'Berlin',
  'London',
  'Oslo',
  'Zurich',
  'Ajmer',
  'Allahabad',
  'Boston',
  'Amsterdam',
]

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return [...initialState].concat([action.payload])
  
    default:
      return state
  }
}
