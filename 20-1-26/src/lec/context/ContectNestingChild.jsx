import React,{ use } from 'react'
import { UserAgeContext, UserContext } from '../App'

const Child = () => {

    

  return (
    <div className='card p-3'>
        <UserContext.Consumer>
            {(user)=>{
                return (
                    <UserAgeContext.Consumer>
                        {(age=>{
                            return <h1>User: {user} age: {age}</h1>
                        })
                        }
                    </UserAgeContext.Consumer>   
                )}
            }

        </UserContext.Consumer>

    </div>
  )
}

export default Child
