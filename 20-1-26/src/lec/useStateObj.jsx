import React, { useEffect, useState } from 'react'

const App = () => {
  let [name, setName] = useState({firstName: '', lastName: ''})
  return (
    <div>
      <input 
        type="text" 
        name="firstName" 
        value={name.firstName} 
        onChange={e=>setName({...name, firstName: e.target.value})} 
      />
      <input 
        type="text" 
        name="lastName" 
        value={name.lastName} 
        onChange={e=>setName({...name, lastName: e.target.value})} 
      />
      <h1>FirstName: {name.firstName}</h1>
      <h1>LastName: {name.lastName}</h1>
      <h1>{JSON.stringify(name)}</h1>
    </div>
  )
}

export default App
