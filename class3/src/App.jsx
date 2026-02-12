import React from 'react'
import Card from './components/Card'
import Button from './components/Button'

const App = () => {

  const user = ["Anubhav", "Bishesher", "Khirkhiri", "Shashikant"]
  return (
    <div className='mx-4 my-4 mb-2'>
      {user.map(function(elem){
        return <Card user = {elem}/>
        
      })}
    </div>
  )
}

export default App
