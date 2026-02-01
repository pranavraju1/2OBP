import React from 'react'
import CakeContainer from './assets/components/cake/CakeContainer'
import IcecreamContianer from './assets/components/icecream/IcecreamContianer'
import UserComponent from './assets/components/user/UserComponent'
UserComponent
const App = () => {
  return (
    <div>
      <CakeContainer/>
      <IcecreamContianer/>
      {/* <UserComponent/> */}
    </div>
  )
}

export default App
