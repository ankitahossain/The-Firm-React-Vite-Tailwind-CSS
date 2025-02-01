import React from 'react'
import Button from './Button'
import banner from "../assets/banner (2).png"
const Banner = () => {
  return (
    <div className="bg-[url(src/assets/bannerimage.png)] bg-cover z-10 bg-center bg-no-repeat relative after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-grey after:absolute after:-z-10">

      <div className='container'>
        <div className='flex items-center justify-between'>
          <div className='w-[60%] py-[100px]'>
            <h1 className='font-extrabold text-[48px] font-nunito text-black'>Get Bussiness <br />
              Solutions with<span className='text-[50px]'> TheFirm.</span> </h1>
            <p className='mt-7 font-lora text-[18px] text-normal leading-[176%] text-black max-w-[65%]'>Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy.</p>
            <Button btnContent="Get in touch"
              btnDesign={"bg-yellow font-bold font-nunito text-white text-[20px] p-3 rounded-lg mt-8 cursor-pointer p-x-[21px] py-4 hover:bg-red-300 hover:text-bold transition"} />
          </div>
          <div className='absolute w-[870px] h-full right-0 object-cover '>
            <picture>
              <img src={banner} alt={banner} className="w-full h-full object-cover" />
            </picture>
          </div></div>
      </div>
    </div>
  )
}



export default Banner
