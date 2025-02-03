import React from 'react'
import Card from './Card'
import card1 from "../assets/card1.png"
import card2 from "../assets/card2.png"
import card3 from "../assets/card3.png"
import profile1 from "../assets/profile1.png"
import profile2 from "../assets/profile2.png"
import profile3 from "../assets/profile3.png"
const Blog = () => {
  return (
    <div className='bg-dark_grey p-25 '>
      <div className='container'>
      <h1 className='font-nunito text-[44px] text-black font-bold p-10 text-center mb-12'>Our Blogs</h1>
      <div className='flex justify-between'>
        <Card Image={card1} cardTitle={"Lorem Ipsum is "} cardText={"Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. "}
          Profile={profile1} />
        <Card Image={card2} cardTitle={"Lorem Ipsum is "} cardText={"Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. "}
          Profile={profile2} />

        <Card Image={card3} cardTitle={"Lorem Ipsum is "} cardText={"Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. "}
          Profile={profile3} />
          </div>


      </div>
    </div>
  )
}

export default Blog
