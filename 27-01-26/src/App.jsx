import React from 'react'
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <CakeContainer/>
      </Provider>
    </div>
  )
}

export default App
