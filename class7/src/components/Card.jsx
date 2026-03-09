import React from 'react'

const Card = () => {
  return (
    <div className=' m-16 w-[22vw] rounded-xl p-6 px-8  flex flex-col items-center  bg-white'>
        <img className='h-24 w-24 rounded-full object-cover' src="https://images.unsplash.com/photo-1768947563931-e53cabb7bd2c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className='text-black font-bold text-2xl mt-2'>Sarthak Sharma</h1>
        <h5 className='text-red-500 font-semibold text-lg my-3'>Developer</h5>
        <p className='text-black text-sm font-medium text-center' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam accusantium, velit id ab minima.</p>
        <button className='px-4 py-2 rounded cursor-pointer active:scale-95 bg-red-600 text-white font-semibold mt-4'>Remove</button>
      
    </div>
  )
}

export default Card
