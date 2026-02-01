import React, { useState } from 'react'
import Parent from './components/Parent'

export const themeContext = React.createContext();


const App = () => {

  let [theme, setTheme] = useState('white');
  
  function toggleTheme(){
    setTheme(prev=>(prev=='white'? "black":"white" ))
  };

  return (
    <div style={{"backgroundColor":  `${theme}`}}>
      <themeContext.Provider value={{theme, toggleTheme}}>
          <Parent/>      
      </themeContext.Provider>
    </div>
  )
}

export default App
