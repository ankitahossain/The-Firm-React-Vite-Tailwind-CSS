import React from 'react'
import Card from './Card'
const Blog = () => {
  return (
    <div className=''>
      <h1 className='font-nunito text-[44px] text-black font-bold'>Our Blogs</h1>
     <div className='flex justify-between'>
     <Card/>
      <Card/>
      <Card/>
     </div>
    </div>
  )
}

export default Blog
