import React from 'react'
import Heading from './Heading'
import questionmark from "../assets/questionmark.png"
import frustration from "../assets/frustration.png"

const Frustration = () => {
  return (
    <div className='bg-dark_grey p-25'>
    <div className='container'>
    <div className='flex justify-between'>
    <div className='w-[42%]'>
    <Heading firstText="Frustration of" secondText="Clients" className={"font-nunito text-[44px] text-black font-black leading-[133%] mb-3"}/>
    <p className='font-lora text-[18px] leading-[176%] font-regular text-black max-w-[583%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    <div className='flex  justify-between p-5'>
    <div>
      <img src={questionmark} alt={questionmark} className='p-2'/>
      <img src={questionmark} alt={questionmark} className='p-2'/>
      <img src={questionmark} alt={questionmark} className='p-2'/>
      <img src={questionmark} alt={questionmark} className='p-2'/>
    </div>
    <div>
      <p className='font-lora text-[18px] leading-[176%] font-regular text-black max-w-[503%]'>Loren rasion gravida auem is bibenua tase</p>
      <p className='font-lora text-[18px] leading-[176%] font-regular text-black max-w-[503%]'>Lorem Ipsum is simply dummy text of the.</p>
      <p className='font-lora text-[18px] leading-[176%] font-regular text-black max-w-[503%]'>Printing and typesetting industry. Lorem Ipsum</p>
      <p className='font-lora text-[18px] leading-[176%] font-regular text-black max-w-[503%]'>When an unknown printer took a galley of type and scrambled it</p>
    </div>
 </div>
    </div>
    <div className='relative w-[580px]'>
    <picture>
      <img src={frustration}/>
    </picture>

    </div>
    </div>
 
    </div>
    </div>
  )
}

export default Frustration

