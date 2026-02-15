import React from 'react'

const Navbar = (props) => {
    console.log(props.color);
    
    
  return (
    <div style ={{backgroundColor: props.color}}className='bg-red-300 mb-2 flex items-center justify-between px-8 py-3 text-white'>
        <h2>{props.title}</h2>
      <div className='flex gap-2'>
        {props.links.map(function(elem,idx){
            return <h4 key = {idx}>{elem}</h4>
        })}
      </div>
    </div>
  )
}

export default Navbar
