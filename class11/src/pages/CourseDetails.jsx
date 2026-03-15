import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const params = useParams()
  return (
    <div>
      <h1 className=' capitalize  text-4xl font-bold underline fixed left-[50vw] -translate-x-0.5'>{params.courseId} Course Detail Page</h1>
    </div>
  )
}

export default CourseDetails
