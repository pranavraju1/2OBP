import React from 'react'
import Parent from './components/Parent'

export const  UserContext = React.createContext();
export const UserAgeContext =  React.createContext();
const App = () => {
  return (
    <div>
      <UserContext.Provider value={'pranav'}>
        <UserAgeContext.Provider value={20}>
          <Parent/>      
        </UserAgeContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
