import React from 'react'
import logo from "../assets/logo.png"

const TheFirm = () => {
  return (
    <div className='bg-white p-25'>
      <div className='container'>
        <div className=''>
  <picture>
    <img src={logo}/>
  </picture>
  <div className='flex items-center gap-x-[44px] bg-amber-300 pl-20 '>
        <ul>
          <li><a href="#" className='font-nunito text-[18px] font-bold max-w-[53px]'>Home</a></li>
          <li><a href="#" className='font-nunito text-[18px] font-bold max-w-[85px]'>Solutions</a></li>
          <li><a href="#" className='font-nunito text-[18px] font-bold max-w-[53px]'>Cases</a></li>
          <li><a href="#" className='font-nunito text-[18px] font-bold max-w-[85px]'>About Us</a></li>
          <li><a href="#" className='font-nunito text-[18px] font-bold max-w-[53px]'>Blog</a></li>
          <li><a href="#" className='font-nunito text-[18px] font-bold max-w-[85px]'>Contact Us</a></li>
          </ul>       
            </div>
            <div>
           
           
            </div>
           </div>
      </div>
      
    </div>
  )
}

export default TheFirm
