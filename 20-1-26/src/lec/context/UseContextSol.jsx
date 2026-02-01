import React, { useContext } from 'react'
import { UserAgeContext, UserContext } from '../App'

const Child = () => {
    let userName = useContext(UserContext);
    let userAge = useContext(UserAgeContext);
  return (
    <div>
      {userName} - {userAge}
    </div>
  )
}

export default Child
