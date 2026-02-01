import { use, useEffect } from 'react';
import { fetchUsers } from './userSlice'
import { useDispatch, useSelector } from 'react-redux'

const UserComponent = () => {
    const user = useSelector(state => state.user);
    console.log(user)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers())
      }, [])
  return (
    <div>
        <h2>List of Users</h2>
        {user.loading && <div>Loading...</div>}
        {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
        {!user.loading && user.users ? (
        <ul>
            {user.users.map(user => (
            <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        ) : null}
    </div>
  )
}

export default UserComponent
