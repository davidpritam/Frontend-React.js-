import React from 'react'

const Button = (props) => {
  return (
    <div className=' w-fit bg-emerald-500 px-4 py-2 font-bold text-white text-lg rounded m-2 '>
      {props.text}
    </div>
  )
}

export default Button
