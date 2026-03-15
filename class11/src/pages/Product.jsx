import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
        <div>
            <h1 className='text-4xl mb-4 font-bold underline '>Product pages</h1>
            <div className='flex  gap-5'>
                <Link className='text-xl font-semibold underline' to='/product/men'>Men's collection</Link>
                <Link className='text-xl font-semibold underline' to='/product/women'>Women's collection</Link>
            </div>
        </div>
  )
}

export default Product
