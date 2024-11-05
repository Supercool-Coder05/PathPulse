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
        image:'/pulsenet.svg',
        link: 'https://pathpulse-ai.gitbook.io/pathpulse.ai-whitepaper/core-offerings/introducing-pulsenet-advanced-artificial-intelligence',
        contentHeading: "PulseNet:  Advanced Artificial Intelligence",
        content:
          "It takes problem-solving and decision-making to unprecedented heights.",
      },
      {
        id: 2,
        image:'/hardware.svg',
        link: 'https://pathpulse-ai.gitbook.io/pathpulse.ai-whitepaper/core-offerings/hardware-components',
        contentHeading: "Advanced Native Hardware",
        content: "ensures seamless data collection and ease of use.",
      },
      {
        id: 3,
        image:'/Cloudbased.svg',
        link: 'https://pathpulse-ai.gitbook.io/pathpulse.ai-whitepaper/technology-stack/technology-fundamentals',
        contentHeading: "Cloud-Based Analytics Platform",
        content: "facilitates scalable processing for cities of any size.",
      },
      {
        id: 4,
        image:'/openapi.svg',
        link: 'https://pathpulse-ai.gitbook.io/pathpulse.ai-whitepaper/technology-stack/technology-fundamentals',
        contentHeading: "Open API Ecosystem Integration",
        content:
          "that fosters innovation and integration with third-party solutions.",
      },
      {
        id: 5,
        image:'/AIaccelerator.svg',
        link: 'https://pathpulse-ai.gitbook.io/pathpulse.ai-whitepaper/technology-stack/technology-fundamentals',
        contentHeading: "Optimised Model Deployment",
        content: "to maximise performance on the AI accelerator.",
      },
    ];
    return (
      <div className="bg-[#081716]  mx-auto mt-10 relative w-full ">
        <div className=" ">
          <Slider ref={sliderRef} {...settings} arrows={false}>
            {images.map((num, index) => (
              <div key={num.id} className="flex justify-center items-center mx-auto">
                <div className="card rounded-2xl flex flex-col justify-center transition-transform duration-300 text-white w-[360px] mx-auto">
                  <div className="h-auto rounded-t-2xl">
                   <img src={num.image} className="rounded-t-2xl" />
                  </div>
                  <div className="bg-gradient-to-b from-[rgba(15,53,43,0.3)] to-[#2E5D51] p-[24px] rounded-b-2xl">
                    <h1 className="font-clash text-[28px] font-medium text-left leading-cap">
                      {num.contentHeading}
                    </h1>
                    <h2 className="mt-4 font-satoshi font-normal text-[16.5px]">
                      {num.content}
                    </h2>

                    <div onClick={() => window.open(num.link, '_blank')} className="flex cursor-pointer justify-between items-center bg-white/40 rounded-[30px] px-[16px] py-[12px] mt-[16px]">
                    <p className="font-satoshi text-[16px]">Learn more</p>
                    <img src="/smallrightarr.svg" alt="" />
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