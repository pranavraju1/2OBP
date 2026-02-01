import React, { useEffect } from 'react'
import { fetchUsers } from './userSlice'
import { useDispatch, useSelector } from 'react-redux'

const UserComponent = () => {

    const user = useSelector(state=>state.user);
    console.log(user)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    



  return (
    <div>
      <h1>UserComponent</h1>
    </div>
  )
}

export default UserComponent
