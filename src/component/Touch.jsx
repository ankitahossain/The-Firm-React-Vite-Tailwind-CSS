import React from 'react'
import Button from './Button'
import Heading from '../component/Heading'
import map from '../assets/map.png'
const touch = () => {
  return (
    <div>
       <div className="">
      <div className=" pb-100">
        <div className="ImageCard">
          <picture>
            <img src={map} className="w-[1540px] h-[396px] " />
          </picture>
          <div className="container ">
            <div className="touchCard w-[930px] h-[507px] bg-white shadow-2xl rounded-2xl pt-18 ml-28">
              <Heading
                firstText="Get in"
                secondText="Touch"
                className={
                  "font-nunito text-[44px] font-black leading-[134%] text-center"
                }
              />
              <div className="flex justify-around pt-10">
                <div className="NameWrapper flex flex-col">
                  <label className="touchName font-nunito font-bold text-gray-400">Name</label>
                  <input
                    type="text"
                    className="border-b-2  w-[353px] inline-block" placeholder="Enter your name"
                  />
                </div>

                <div className="EmailWrapper flex flex-col">
                  <label className="touchEmail font-nunito font-bold text-gray-400">Email</label>
                  <input
                    type="email"
                    className="border-b-2 w-[353px] inline-block" placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="flex justify-around pt-10">
                <div className="PhoneWrapper flex flex-col">
                  <label className="touchPhone font-nunito font-bold text-gray-400">Phone</label>
                  <input
                    type="phone"
                    className="border-b-2 w-[353px] inline-block" placeholder="Enter your phone number"
                  />
                </div>

                <div className="SubjectWrapper flex flex-col">
                  <label className="touchSubject font-nunito font-bold text-gray-400">Subject</label>
                  <input
                    type="option"
                    className="border-b-2 w-[353px] inline-block" placeholder="Choose your subject"
                  />
                </div>
              </div>

              <Button
                btnContent="Submit"
                btnDesign={
                  "bg-[#FACA10] px-10 py-3 rounded-lg font-nunito font-black text-[18px] leading-[25px] text-white cursor-pointer hover:bg-black mt-20 ml-[40%]"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default touch
