import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { citiesSelector } from '../selectors'
import { addCity } from '../actions'

const NEW_CITIES = [
  'Bangalore',
  'Hyderabad',
  'Lucknow',
  'Tokyo',
  'Beijing',
  'Wellington',
  'Melbourne',
  'Dublin',
  'Edinbourgh',
  'Moscow'
]

const getRandomElem = list => {
  return list[Math.floor(Math.random() * NEW_CITIES.length)]
}

const Cities = props => {
  const citiesList = useSelector(citiesSelector)
  const dispatch = useDispatch()
  const randomCity = getRandomElem(NEW_CITIES)

  return (
    <div>
      <h4>Cities</h4>
      {citiesList.map(city => <div key={city}>{city}</div>)}
      <button onClick={() => dispatch(addCity(randomCity))} >Click Me!</button>
    </div>
  )
}

export default Cities