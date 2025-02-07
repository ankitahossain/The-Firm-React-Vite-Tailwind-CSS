import React from 'react'
import Heading from "./Heading"
// import Ellipse from '../assets/Ellipse 31.png'
// import Ellipse from '../assets/Ellipse 33.png'
// import Ellipse from "../assets/Ellipse 34.png"
// import Ellipse from "../assets/Ellipse 35.png"
// import Ellipse from "../assets/Ellipse 36.png"

import Slider from "react-slick"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const OurTestimonial = () => {
  return (
    <div className='bg-amber-500 p-25'>
      <div className='container'>
        <div>
            <Heading className={"font-nunito text-[44px] font-black max-w-[369px]"} firstText="Our"secondText="Testimonials"/>
            <p className='font-lora font-regular text-[18px]  leading-[176%] max-w-[864px] text-center pb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            <h2 className='font-nunito font-bold text-[24px]'>Jenny Wilson | <span className='font-lora font-normal text-[17px]'>Digital Agency</span></h2>
        </div>
      </div>
    </div>
  )
}

export default OurTestimonial
