import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const settings = {
      centerMode: true,
      infinite: true,
      centerPadding: "0",
      slidesToShow: 3,
      speed: 500,
      focusOnSelect: true,
      beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    };
  
    const handlePrev = () => {
      sliderRef.current.slickPrev();
    };
  
    const handleNext = () => {
      sliderRef.current.slickNext();
    };
    const images = [
      {
        id: 1,
        contentHeading: "PulseNet: Artificial Super Intelligence",
        content:
          "It takes problem-solving and decision-making to unprecedented heights.",
      },
      {
        id: 2,
        contentHeading: "Advanced Native Hardware",
        content: "ensures seamless data collection and ease of use.",
      },
      {
        id: 3,
        contentHeading: "Cloud-Based Analytics Platform",
        content: "facilitates scalable processing for cities of any size.",
      },
      {
        id: 4,
        contentHeading: "Open API Ecosystem",
        content:
          "that fosters innovation and integration with third-party solutions.",
      },
      {
        id: 5,
        contentHeading: "Optimised Model Deployment",
        content: "to maximise performance on the AI accelerator.",
      },
    ];
    return (
      <div className="bg-[#081716]  mx-auto mt-10 relative w-full ">
        <div className="mr-12">
          <Slider ref={sliderRef} {...settings} arrows={false}>
            {images.map((num, index) => (
              <div key={num.id} className="ml-[60px]">
                <div className="card flex flex-col justify-center transition-transform duration-300 text-white h-[420px] w-[360px]">
                  <div className="bg-white   h-[150px]  rounded-t-2xl ">
                    {" "}
                  </div>
                  <div className="bg-gradient-to-b  from-[rgba(15,53,43,0.3)] to-[#2E5D51] h-[200px] pl-[12px] pt-[12px]  rounded-b-2xl">
                    <h1 className="font-clash text-[30px] font-medium leading-[29px] text-left leading-cap ">
                      {num.contentHeading}
                    </h1>
                    <h2 className="mt-4 font-satoshi  font-normal leading-[25px] text-left text-[16.5px] leading-cap">
                      {num.content}
                    </h2>
                    <div className="bg-white/10 w-[310px] h-[35px] py-2 pl-4 pr-3  gap-0 rounded-[30px] flex justify-between mt-6">
                      <div className="font-satoshi font-customWhite font-medium leading-5 text-left">
                        Learn more
                      </div>
                      <div className="rounded-l-[30px] ">
                        <img src='/smallrightarr.svg' alt="" className="w-[18px] h-[18px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div onClick={handlePrev}>
          <img
            src="/leftarr.svg"
            alt=""
            className=" h-[72px] cursor-pointer  w-[72px] absolute left-2 top-1/2 transform -translate-y-1/2  p-2 rounded-full"
          />
        </div>
        <div onClick={handleNext}>
          <img
            src="/rightarr.svg"
            alt=""
            className="absolute right-2 cursor-pointer  h-[72px]  w-[72px] top-1/2 transform -translate-y-1/2  p-2 rounded-full"
          />
        </div>
  
    
      </div>
    );
  };
  
  export default Carousel;