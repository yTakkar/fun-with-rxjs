import React from 'react'
import { useSelector } from 'react-redux'
import { userSelector } from '../selectors'

const User = props => {
  const { name, age, username } = useSelector(userSelector)

  return (
    <div>
      <h4>User:</h4>
      <div>Name: {name}</div>
      <div>Username: {username}</div>
      <div>Age: {age}</div>
    </div>
  )
}

export default User