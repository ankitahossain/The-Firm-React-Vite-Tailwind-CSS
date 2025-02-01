import React from 'react' 
import Button from './Button'
import card1 from '../assets/card1.png'
import circle from '../assets/circle.png'




const Card = () => {
  return (

  <div className='flex justify-between'>
     <div className='w-[340px] h-[560.78px] bg-white'>
        <div className='w-full h-full object-cover'>
         <picture>
        <img src = {card1}/>
           
        </picture>
        <h1 className='mt-[27.44px] font-nunito text-[24px] font-bold text-black px-3'>Lorem Ipsum is </h1>
      <p className='mt-[9px]font-lora text-[17px] font-regular text-dark-grey px-3 leading-[176%] max-w-[308px]'>Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen.  e</p>
    <div className='w-full h-[4px] bg-ye'></div>
    
     <div className='flex justify-between mt-[50px] ml-[21px]'>
     <div className='flex'>
                  <picture><img src={circle}/></picture>
                  <h2>Alex Liones</h2>
                </div>
                <h6>28,Aug 2020, 09:48:00</h6>
     </div>
      <Button btnContent="Read More"
                btnDesign={"mt-[32px] ml-[91px] bg-black font-bold font-nunito text-white text-[20px] p-3 rounded-lg cursor-pointer"} />

                
        </div>
    
    </div>
  </div>

  )
}

export default Card
