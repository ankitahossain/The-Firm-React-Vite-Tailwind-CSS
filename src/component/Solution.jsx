import React from 'react'
import Heading from './Heading'
import Button from './Button'
import solution from '../assets/solution.png'

const Solution = () => {
  return (
    <div className='bg-white p-25 '>
      <div className='container '>
 <div className='flex justify-between'>
 <div >
  <picture>
    <img src={solution} className='w-[656px] object-cover'/>
  </picture>
   </div>
   <div>
  <Heading className={"font-nunito text-[44px] text-black font-black leading-[133.4%] max-w-[436px] pb-9"} firstText="Perfect Solution for Your "secondText="Business"/>
    <p className='font-lora text-[18px] leading-[176%] font-regular text-black max-w-[464px] pb-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
    <div>
    <Button btnContent="Get in touch"
                btnDesign={"bg-yellow font-bold font-nunito text-white text-[20px] p-3 rounded-lg btn"} py-3 />

    </div>
  </div>
   </div>
 </div>
   
      </div>
    

  )
}

export default Solution

