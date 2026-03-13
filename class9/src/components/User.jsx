import React from 'react'

const User = (props) => {

    const clr1 = Math.floor(Math.random()*256)
    const clr2 = Math.floor(Math.random()*256)
    const clr3 = Math.floor(Math.random()*256)
  return (
    <div style={{backgroundColor:`rgb(${clr1},${clr2},${clr3})`}} className='user-card'>
      <h3>{props.elem.name}</h3>
      <h4>{props.elem.email}</h4>
    </div>
  )
}

export default User
