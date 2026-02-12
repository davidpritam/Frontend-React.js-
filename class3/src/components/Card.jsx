import React from 'react'

const Card = (props) => {//Yha pe cheeze object ke form me receive hogi:
    
  return (
    <div className='bg-emerald-400 rounded border-4 border-red-400 m-2 px-2 py-2  h-20 w-fit  '>
        <h1 className='text-4xl font-semibold'>{props.user}</h1>
        {/* {arr.filter(function(elem){
            return elem > 20 //condition pass hoga yha pe
        })} */}
        {/* {arr.map(function(){
            return <h1>Hello</h1>
        })} */}
      {/* <h1>{user}, {age} {arr}</h1> */}
    </div>
  )
}

export default Card
