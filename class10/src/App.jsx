import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('')
  const [num, setNum] = useState(0)

  const getData = async function(){
    const response = await axios.get('https://randomuser.me/api/')
    setUsername((response.data.results[0].name.first)+ " " + (response.data.results[0].name.last))
    
  }
  useEffect(function(){
    getData()
  },[num])
  return (
    <div>
      {username}
      <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num+1)
      }} >Click me</button>
    </div>
  )
}

export default App



// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'

// const App = () => {


//   const [number1, setNumber1] = useState(0)
//   const [number2, setNumber2] = useState(0)
//   const [number3, setNumber3] = useState(0)

//   useEffect(function(){
//     console.log("useEffect chal rha hai...");
    
//   })

//   // const [counter, setCounter] = useState(0)

//   // const [title, setTitle] = useState('')

//   // useEffect(function(){//side rendering karta hai bas
//   //   console.log("useEffect is running...");
    
//   // },[counter])//array ke andar dependencies hogi aur jo dependecies hogi uske andar wo jitni bar chalega utni bar useEffect chalega
//   return (
//     <div>
//       <h1>{number1}</h1>
//       <button onClick={()=>{
//         setNumber1(Math.floor(Math.random()*100))
//       }}>Change Number1</button>
//       <br />
//       <br />

//       <h1>{number2}</h1>
//       <button onClick={()=>{
//         setNumber2(Math.floor(Math.random()*100))
//       }}>Change Number2</button>
//       <br />
//       <br />

//       <h1>{number3}</h1>
//       <button onClick={()=>{
//         setNumber3(Math.floor(Math.random()*100))
//       }}>Change Number3</button>
      
//       {/* <input value={title}
//       onChange={(e)=>{
//         setTitle(e.target.value)
//       }} type="text" />
//       <h1>{counter}</h1>
//       <button onClick={()=>{
//         setCounter(counter+1)
//       }}>Increase</button> */}

//     </div>
//   )
// }

// export default App
