import React from 'react';
import Heading from './Heading';
import Button from './Button';
import rs from "../assets/research.png";
import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={"nextArrow"} onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={"prevArrow"} onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
}

const Research = () => {
  const item = [
    { id: 1, img: rs },
    { id: 2, img: image1 },
    { id: 3, img: image2 },
    { id: 4, img: image3 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    fade: true,
    cssEase: "linear",
    pauseOnhover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className='bg-white p-24'>
      <div className="container">
        <Heading firstText="Our Research & Case" secondText="Studies" className={"font-nunito font-black text-[44px] text-text-black leading-[134%] text-center mb-7"} />
        <p className='max-w-[864px] text-center ml-50'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>

        <div className='pt-20 flex justify-between items-center'>
          <div className='leftwrapper w-[60%]'>
            <p className='font-nunito font-bold text-[30px] leading-[41px] mb-3'>Lorem Ipsum is simply</p>
            <p className="max-w-[500px] font-lora font-normal text-[18px] leading-[176%] text-text-black ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
            <Button btnContent="Read More" btnDesign={"px-5 py-3 bg-yellow rounded-lg font-nunito font-bold text-[18px] text-white leading-[25px] mt-7 hover:bg-black"} />
          </div>
          <div className='rightWrapper relative w-[40%]'>
            <div className="bottomCircle"></div>
            <div className="slider-container">
              <Slider {...settings}>
                {item.map((data) => (
                  <div className='ResearchCard right-0' key={data.id}>
                    <div className='p-3 rounded-lg bg-white w-[410px] h-[360px] shadow-lg'>
                      <img src={data.img} className='w-[400px] h-[332px] rounded-lg' />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
