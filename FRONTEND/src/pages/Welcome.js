import React from 'react'
import { useSelector } from 'react-redux'


const Welcome = () => {

  const { user} = useSelector(
    (state) => state.auth
  );
  return (
    <div>Welcome back <strong>{user && user.name}</strong></div>
  )
}

export default Welcome