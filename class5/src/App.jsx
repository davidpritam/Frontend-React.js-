import React, { useState } from 'react'
import Washroom from './components/Washroom'

const App = () => {

  const [gender, setGender] = useState("Male")

  function changeGender(){
    if(gender == "Male"){
        setGender("Female")
    }else if(gender == "Female"){
      setGender("Others")
    }
    else{
        setGender ("Male")
    }
  }

  // const [marks, setMarks] = useState([80, 45, 67, 13, 28])
  // function graceStudent(){
  //   const newMarks = marks.map(function(elem){
  //     if(elem >= 95 ){
  //       return elem;
  //     // }else{
  //       return (elem+5);
  //     }
  //   })
  //   setMarks(newMarks)
    
  // const [num, setNum] = useState(0)
  // const [user, setUser] = useState('anubhav')//Here user is read only and setUser is write only.

  // const btnClicked = ()=>{
  //   console.log(user);
    
  //   setUser("Bixi")
  //   console.log(user);
    
  // }

  // const arr = [ "Sam", "Dam", "Ram", "Mam"]
  // const [num, setNum] = useState(0)

  return (
    <div >
      <h1 className='gender'>Your gender is ~ {gender}</h1>
      <button className='btn' onClick={changeGender}>Change Gender</button>
      <Washroom user = {gender} />
      {/* {marks.map(function(elem, idx){
        return <h1 key={idx}>Student {idx + 1 } = {elem} ({elem>33? "PASS": "FAIL"})</h1>
      })}
      <button className='btn' onClick={graceStudent}>Give Them Grace</button> */}
      {/* <h1>{arr[num]}</h1>
      <button onClick={()=>{
        if(num < arr.length-1){
          setNum(num + 1)
        }

      }}>Change User</button> */}
      {/* <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num + 1)
      }} >Increase</button>

      <button onClick={()=>{
        setNum(num - 1)
      }}>Decrease</button>

      <button onClick={()=>{
        setNum(num + 5)
      }}>Jump to 5</button> */}
    </div>
  )
}

export default App
