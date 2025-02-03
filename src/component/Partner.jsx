import React from 'react'
import Heading from './Heading'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import windows from "../assets/windows.png"
import google from "../assets/google.png"
import firefox from "../assets/firefox.jpg"
import safari from "../assets/safari.jpg"
import opera from "../assets/opera.jpg"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Partner = () => {
  const partner = [
    { id : 1 , img : windows},
    { id : 2 , img : google },
    { id : 3 , img : firefox },
    { id : 4 , img : safari },
    { id : 5 , img : opera },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase : "linear",
    pauseOnhover : true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,


  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "w-[40px] h-[40px] absolute right-0 top-1/2 -translate-y-1/2 rounded-full "
        }
        style={{
          ...style,
          display: "block",
          padding: "20px",
          background: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <div>
          <IoIosArrowForward className="text-white text-2xl cursor-grab" />
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "w-[40px] h-[40px] animate-pulse shadow-2xl absolute left-0 top-1/2 -translate-y-1/2 rounded-full z-10"
        }
        style={{
          ...style,
          display: "block",
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <IoIosArrowBack className="text-white text-2xl cursor-grab" />
      </div>
    );
  }
  return (

    <div className='bg-white p-25'>
      <div className='container'>
        <Heading className={'font-nunito text-[44px] text-black font-bold leading-[133%] p-10 text-center'} firstText={"Our"} secondText={"Partner"} />

        <div className="slider-container">
          <Slider {...settings}>
           {partner.map((data)=>(
             <div className='p-6'>
              <div className="bg-dark-grey p-8 rounded-xl flex items-center justify-center cursor-pointer">
                <img src={data.img} className = " w-[120px] h-[120px] object-contain" />
              </div>
              </div>
              
           ))}

          </Slider>



        </div>





      </div>

    </div>
  )
}


export default Partner
