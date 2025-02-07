import React from 'react'
import Heading from './Heading'
import Button from './Button'
import brand from '../assets/brand.png'
import branding from "../assets/branding.png"

const Chooseus = () => {
  return (
    <div className='bg-dark_grey p-25'>
        <div className='container '>
       <div >
       <Heading className={"font-nunito text-[44px] font-black leading-[133.4%] text-center mb-10"} firstText="Reason to Choose" secondText="us"/>
       <p className='font-lora text-[18px] leading-[176%] font-normal text-center max-w-[864px] pl-20 ml-20'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        <div className='flex justify-around pt-8 mb-15'>
            
       <Button btnContent="Market Research"
                btnDesign={"bg-white font-bold font-nunito text-[20px] p-3 rounded-lg btn"} />
                <Button btnContent="Branding "
                btnDesign={"bg-yellow font-bold font-nunito text-white text-[20px] p-3 rounded-lg btn"} />
                <Button btnContent="Reporting"
                btnDesign={"bg-white font-bold font-nunito text-[20px] p-3 rounded-lg btn"} />
                <Button btnContent="Data Analysis"
                btnDesign={"bg-white font-bold font-nunito text-[20px] p-3 rounded-lg btn"} />

  
        </div>
        </div> 

        </div>
        <div>
            
             
             <div  className='flex justify-around items-center bg-white p-10 '>
                
            <div>
                <picture>
                <img src={brand} className='w-[550px] object-cover'/>   
                </picture>
            </div>
             
              <div>
              <div className='flex items-center pb-5'>
                    <img src={branding}/>
                    <h2 className='font-nunito font-bold text-[30px] leading-[40.92%] w-[138px] '>Branding</h2>
                </div>
                 <div >
                 <div className='font-lora font-normal text-[18px] w-[505px] pb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type</div>
                 <Button btnContent="Read More"
                btnDesign={"bg-black font-bold font-nunito text-white text-[20px] p-3 rounded-lg btn"}  />
                 </div>
              </div>
             </div>
             

            </div>
        </div>
      
    
    
  )
}

export default Chooseus
