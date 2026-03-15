import React from 'react'
import { useParams } from 'react-router-dom'

const Anycourse = () => {
    const params = useParams()
    console.log(params.courseId);
    
  return (
    <div>
      <h1 className='capitalize text-4xl font-bold underline fixed left-[50vw] -translate-x-0.5'>{params.courseId} Course Page</h1>
    </div>
  )
}

export default Anycourse
