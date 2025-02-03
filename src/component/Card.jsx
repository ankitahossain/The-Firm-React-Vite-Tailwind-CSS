import React, { Profiler } from 'react' 
import Button from './Button'





const Card = ({Image,cardText,cardTitle,Profile}) => {
  return (

  <div className='flex justify-between'>
     <div className='w-[340px] h-[560.78px] bg-white shadow-lg shadow-amber-400'>
        <div className='w-full h-full object-cover'>
         <picture>
        <img src = {Image}/>
           
        </picture>
        <h1 className='mt-[27.44px] font-nunito text-[24px] font-bold text-black px-4'>Lorem Ipsum is </h1>
      <p className='mt-[9px]font-lora text-[17px] font-regula text-gray-400 px-4 leading-[176%] max-w-[308px]'>Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen.  e</p>
    <div className='w-full h-[4px] bg-dark_grey mt-8'></div>
    
     <div className='flex justify-between mt-[15px] ml-[21px]'>
     <div className='flex'>
                  <picture><img src={Profile}/></picture>
                  <h2>Alex Liones</h2>
                </div>
                <h6>28,Aug 2020, 09:48:00</h6>
     </div>
      <Button btnContent="Read More"
                btnDesign={"btn ml-5 bg-yellow font-bold font-nunito text-white text-[20px] p-3 rounded-lg cursor-pointer "} />

                
        </div>
    
    </div>
  </div>

  )
}

export default Card
