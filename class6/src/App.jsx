import React, { useState } from 'react'

const App = () => {

  const [first, setFirst] = useState("")

  const [allUsers, setAllUsers] = useState([])
  
  const submitHandler = (e)=>{
    e.preventDefault();//form submit hone ke bad browser ko reload hone se rokega
    const newAllUsers = [...allUsers]//array ka destructurign hoga jisme sare values ek hi array me store hoga.
    newAllUsers.push(first)//new value ko push karega new array me.
    console.log(newAllUsers)
    setAllUsers(newAllUsers)//sari values ko ek sath store karega
    // console.log(first);//Form me kya likha h console pe print hoga
    setFirst('')//Input field ko submit hone ke bad phir se empty kar dega
  }


  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text"
        placeholder='Enter your name'
        value={first} 
        required//Input field ko bharna required kar dega.
        onChange={(e)=>{
          setFirst(e.target.value)
          
        }}/>
        <button>Submit</button>
      </form>
      {allUsers.map(function(elem,idk){
        return <h4 key={idk}>{elem}</h4>
      })}
    </div>
  )
}

export default App



