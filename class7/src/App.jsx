import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [userName, setUserName] = useState("")
  const [userRole, setUserRole] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [userDesc, setUserDesc] = useState("")

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e)=>{
    // console.log(userName,userRole,imageUrl,userDesc)
    e.preventDefault();

    const oldUsers = [...allUsers]
    oldUsers.push({userName,userRole,imageUrl,userDesc})
    // console.log(oldUsers);
    
    setAllUsers(oldUsers)
    
    setUserName("")
    setUserDesc("")
    setImageUrl("")
    setUserRole("")
  }

  const deleteHandler = (idx)=>{
    const copyUsers = [...allUsers];

    copyUsers.splice(idx,1)
    
    setAllUsers(copyUsers)
    
  }
  return (
    <div className='h-screen  bg-black text-white'>
      <form
      onSubmit={(e)=>{
        submitHandler(e)
      }} 
      className='p-4 flex flex-wrap justify-center'>
        <input
        value={userName}
        onChange={(e)=>{
          setUserName(e.target.value)
          
        }} 
        className='border-2 px-2 text-xl font-semibold py-2 m-2 rounded w-[45%]' type="text" placeholder='Enter your name' />
        <input 
        value={userRole}
        onChange={(e)=>{
          setUserRole(e.target.value)
        }}
        className='border-2 px-2 text-xl font-semibold py-2 m-2 rounded w-[45%]' type="text" placeholder='Enter role' />
        <input 
        value={imageUrl}
        onChange={(e)=>{
          setImageUrl(e.target.value)
        }}
        className='border-2 px-2 text-xl font-semibold py-2 m-2 rounded w-[45%]' type="text" placeholder='Image URL' />
        <input
        value={userDesc}
        onChange={(e)=>{
          setUserDesc(e.target.value)
        }} 
        className='border-2 px-2 text-xl font-semibold py-2 m-2 rounded w-[45%]' type="text" placeholder='Enter Description' />
        <button className='px-5 py-2  rounded active:scale-95 cursor-pointer bg-emerald-300 w-[90%]'>Create User</button>
      </form>
      <div className='flex flex-wrap '>
        {allUsers.map(function(elem,idx){
          return <div key={idx} className=' m-16 w-[22vw] rounded-xl p-6 px-8  flex flex-col items-center  bg-white'>
        <img className='h-24 w-24 rounded-full object-cover object-center' src={elem.imageUrl} alt="" />
        <h1 className='text-black font-bold text-2xl mt-2'>{elem.userName}</h1>
        <h5 className='text-blue-500 font-semibold text-lg my-3'>{elem.userRole}</h5>
        <p className='text-black text-sm font-medium text-center' >{elem.userDesc}</p>
        <button onClick={()=>{
          deleteHandler(idx);
        }} className='px-4 py-2 rounded cursor-pointer active:scale-95 bg-red-600 text-white font-semibold mt-4'>Remove</button>
      
    </div>
        })}
      </div >
    </div>
  )
}

export default App
