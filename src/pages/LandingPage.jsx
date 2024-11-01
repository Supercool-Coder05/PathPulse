import Header from "../components/header";
import SingleOurService from "../components/SingleOurService";
import "../components/services.css";

import React, { useState, useEffect } from "react";
import Carousel from "../components/Carousel";

const cardData = [
  {
    title: "Urban Safety Network",
    points: [
      "Instant alerts for road hazards and emergencies",
      "Predictive maintenance for critical infrastructure",
    ],
  },
  {
    title: "Sustainable City Planning",
    points: [
      "Data-driven urban development strategies",
      "Environmental impact monitoring and analysis",
    ],
  },
  {
    title: "Intelligent Public Transport",
    points: [
      " Real-time transit tracking and occupancy data",
      "Adaptive routing based on demand patterns",
    ],
  },
  {
    title: "Smart Traffic Management",
    points: [
      " Live traffic updates every 60 seconds",
      "AI-powered congestion prediction and prevention",
    ],
  },
];

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const angle = 90;
  const [cardPositions, setCardPositions] = useState([0, 1, 2, 3]); // Tracks position of each card

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  const cards = [
    {
      id: 1,
      contentHeading: "City official",
      content: "Looking to optimise operations?",
      image: "/Government.svg",
    },
    {
      id: 2,
      contentHeading: "Fleet Owner",
      content: "Aiming to improve services?",
      image: "/Fleet.svg",
    },
    {
      id: 3,
      contentHeading: "Tech innovator",
      content: "with complementary solutions?",
      image: "/Programmer.svg",
    },
    {
      id: 4,
      contentHeading: "Driver",
      content: "Looking for better maps?",
      image: "/Race.svg",
    },
  ];

  const items = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];

  const rotateCards = () => {
    setCardPositions(prevPositions => {
      const newPositions = [...prevPositions];
      const last = newPositions.pop();
      newPositions.unshift(last);
      return newPositions;
    });
  };

  useEffect(() => {
    const interval = setInterval(rotateCards, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary relative">
      <div className="relative min-h-screen">
        {/* header */}
        <div className="absolute w-full ">
          <Header />
        </div>

        {/* Content section - centered */}
        <div className="absolute inset-0 flex items-center justify-center z-20 -mt-36">
          <div className="text-white flex flex-col items-center justify-center">
            <div className="relative">
              <div className="absolute w-full text-[110px] font-clash select-none"
                   style={{
                     opacity: 0.4,
                     background: 'linear-gradient(180deg, #FFF 2.39%, #83DBC9 91.52%)',
                     backgroundClip: 'text',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     filter: 'blur(10px)',
                     fontFamily: 'Clash Display Variable',
                   }}>
                Rerouting the Future
              </div>
              <div className="text-[96px] font-clash relative"
                   style={{
                     background: 'linear-gradient(180deg, #FFF 2.39%, #83DBC9 91.52%)',
                     backgroundClip: 'text',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                   }}>
                Rerouting the Future
              </div>
            </div>
            <div className="text-[35px] font-satoshi mb-8" 
              style={{
                background: 'linear-gradient(180deg, #FFF 2.39%, #83DBC9 91.52%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Making The World Move Smarter.</div>
            <div className="flex justify-center">
              <button 
                onClick={() => window.open('https://pathpulse-ai.gitbook.io/pathpulse.ai-whitepaper', '_blank')}
                className="group relative flex items-center rounded-full bg-gradient-to-t from-[#1a7d70] to-[#013738] pl-[24px] gap-x-[24px] py-[12px] text-lg w-[280px] h-[54px] font-medium text-white transition-all hover:shadow-lg hover:shadow-[#03855C]/25 active:scale-95"
              >
                <img
                  src="/document.svg"
                  className="h-[20px] w-[15px] text-white/90"
                  alt="stars"
                />
                <span className=" font-clash text-[24px]">View Whitepaper</span>
                <div className="absolute inset-0 rounded-[99px] bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </div>
          </div>
        </div>

        {/* stars overlay */}
        <div className="absolute z-10">
          <img src="/staroverlay.svg" alt="stars" />
        </div>
        {/* building image overlay */}
        <div className="absolute w-full">
          <div className="relative">
            <img src="/building.svg" className="w-full" alt="building" />
            {/* Button positioned over building */}
            <div className="absolute left-1/2 bottom-1/3 transform -translate-x-1/2 translate-y-1/2">
              <div className="border-2 border-white rounded-full w-[121px] h-[119px] flex justify-center items-center p-10 bg-gradient-to-b from-[#02C394] to-[#A4EACF]">
                <img src="/arrowdown.svg" alt="arrowdown" />
              </div>
            </div>
          </div>
        </div>
        {/* corner light overlay */}
        <div className="absolute w-full">
          <img src="/cornerlight.svg" className="w-full" alt="stars" />
        </div>
      </div>

      {/* extra div section */}

      <div className="h-[216px] mt-24  flex  px-[70px]">
        <div className="flex bg-gradient-to-l from-customStart/60 to-customEnd/40 justify-end w-1/2 items-center py-[16px] pr-[25px] pl-[24px] border-r-[1px] rounded-l-[24px] ">
          <div className="flex flex-col   w-1/2">
            <span className="text-[80px] font-clash text-white">20% </span>
            <span className="text-[26px] font-clash -mt-6 text-white">Higher Accuracy</span>
          </div>
          <div className="text-[34px] ml-8 font-clash  text-white">
            & Efficiency than Modern Maps
          </div>
        </div>

        <div className=" py-[16px] pl-[40px] pr-[24px] rounded-r-[24px] bg-gradient-to-r from-customStart/60 to-customEnd/40 flex justify-end w-1/2 items-center">
          <div className="text-[80px] font-clash text-white">$5B+</div>
          <div className="text-[36px] font-clash ml-14 text-white">
            Potential Market Capitalisation
          </div>
        </div>
      </div>

      {/* About us section */}

      <div className="relative mt-28 min-h-screen  text-white ">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center mb-16">
          <h1 className="text-[60px] font-clash font-semibold mb-4" style={{
                     background: 'linear-gradient(180deg, #FFF 2.39%, #83DBC9 91.52%)',
                     backgroundClip: 'text',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                   }}>About Us</h1>

          <div className=" items-center flex justify-center gap-x-[7px] bg-gradient-to-t from-[#1a7d70] to-[#013738] pl-[24px]  text-lg   text-white transition-all hover:shadow-lg hover:shadow-[#03855C]/25 active:scale-95 px-6 py-3 rounded-full ">
            <img
              src="/blueStar.svg"
              className="w-[26px] h-[26px]"
              alt="star icon"
            />
            <p className="text-[30px] font-clash  ">
              Revolutionalizing Urban Intelligence
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full  relative ">
          <div className="space-y-6 pl-[70px] w-1/2 "  style={{
                     background: 'linear-gradient(180deg, #FFF 2.39%, #83DBC9 91.52%)',
                     backgroundClip: 'text',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                   }}>
            <p className="text-[24px]">
              PathPulse.ai sits at the crossroads of big data, AI, and mobility.
            </p>

            <p className="text-[24px]">
              We're developing a central nervous system for intelligent cities,
              processing constant streams of information to create urban
              environments that are more efficient, cost-effective, safer, and
              easier to navigate.
            </p>

            <p className="text-[24px]">
              Our mission is to tackle urban challenges head-on and drive
              meaningful improvements in:
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="text-[#70FFCD] text-[24px]">
                • City Operations
              </div>
              <div className="text-[#70FFCD] text-[24px]">• Urban Planning</div>
              <div className="text-[#70FFCD] text-[24px]">
                • Public Transportation
              </div>
              <div className="text-[#70FFCD] text-[24px]">• And Much More</div>
              <div className="text-[#70FFCD] text-[24px]">• Navigation</div>
            </div>
          </div>
        </div>

        {/* Decorative Image */}
        <div className="absolute overflow-hidden w-[400px] h-[756px] right-0 top-1/2 -translate-y-1/2">
          <img
            src="/p.svg"
            alt="Decorative pattern"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* our solution section */}

      <div className="relative  mt-28 min-h-screen text-white bg-[url('/background.svg')] bg-cover">
        <div className="flex flex-col justify-center items-center mb-16">
          <h1 className="text-[60px] font-clash mb-4"style={{
                     background: 'linear-gradient(180deg, #FFF 2.39%, #83DBC9 91.52%)',
                     backgroundClip: 'text',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                   }}>Our Solutions</h1>

          <div className="items-center flex justify-center gap-x-[7px] bg-gradient-to-t from-[#1a7d70] to-[#013738] pl-[24px]  text-lg   text-white transition-all hover:shadow-lg hover:shadow-[#03855C]/25 active:scale-95 px-6 py-3 rounded-full">
            <img
              src="/blueStar.svg"
              className="w-[26px] h-[26px]"
              alt="star icon"
            />
            <img src="/pathsmalllogo.svg" className="" />
          </div>
        </div>

        <div className="flex items-start justify-center p-4">
          <div className="carousel-container">
            <div
              className="carousel"
              style={{
                transform: `rotateY(${currentIndex * -angle}deg)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {cardData.map((data, index) => (
                <div
                  key={index}
                  className="carousel-item"
                  style={{
                    transform: `rotateY(${index * angle}deg) translateZ(250px)`,
                    filter: index === currentIndex ? "none" : "blur(10px)",
                    opacity: index === currentIndex ? 1 : 0.9,
                    transition: "filter 0.5s ease-in-out",
                  }}
                >
                  <SingleOurService title={data.title} points={data.points} />
                </div>
              ))}
            </div>
            <button onClick={prevSlide} className="carousel-button left">
              <img src="/leftarrow.svg" alt="" className="h-10 w-10" />
            </button>
            <button onClick={nextSlide} className="carousel-button right">
              <img src="/rightarrow.svg" alt="" className="h-10 w-10" />
            </button>
          </div>
        </div>
      </div>

      {/* Join our community */}

      {/* <div className="relative mt-28 min-h-screen text-white">
                <div className="w-full  flex justify-center items-center">
                <img
              src="/msgcircles.svg"
             
              alt="community vector"
            />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <p className="text-[60px] font-semibold">Join Our Community</p>
                  <button className="bg-backgroundColor border-[1px] border-white text-white px-14 py-4 rounded-full text-xl">
                    Join Us
                  </button>
                </div>
      </div> */}

      {/* Our Tech Section */}

      <div className="relative mt-28 min-h-screen text-white">
        <div className="flex flex-col justify-center items-center mb-16">
          <h1 className="text-[60px] font-clash mb-4" style={{
                     background: 'linear-gradient(180deg, #FFF 2.39%, #83DBC9 91.52%)',
                     backgroundClip: 'text',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                   }}>Our Tech</h1>

          <div className="items-center flex justify-center gap-x-[7px] bg-gradient-to-t from-[#1a7d70] to-[#013738] pl-[24px]  text-lg   text-white transition-all hover:shadow-lg hover:shadow-[#03855C]/25 active:scale-95 px-6 py-3 rounded-full ">
            <img
              src="/blueStar.svg"
              className="w-[26px] h-[26px]"
              alt="star icon"
            />
          <p className="text-[30px] font-clash text-white">
              What makes our AI Special
            </p>
          </div>
        </div>

        <Carousel items={items} />

      </div>

      {/* join our Network */}
      <div className="relative overflow-hidden min-h-screen text-white">
        <div className="absolute inset-0 w-full h-full bg-[url('/map.svg')] bg-cover bg-center bg-no-repeat" style={{
          mask: 'radial-gradient(circle at center, black 50%, transparent 100%)',
          WebkitMask: 'radial-gradient(circle at center, black 50%, transparent 100%)'
        }}>

          <div className="flex gap-x-[160px]  justify-center items-center">


          <div className="-mt-32 flex flex-col">
            <p className="text-[60px]  font-clash"style={{
                     background: 'linear-gradient(180deg, #FFF 2.39%, #83DBC9 91.52%)',
                     backgroundClip: 'text',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                   }} >Are You A </p>
            <button className="transform -translate-x-2 flex items-center text-white py-2 justify-center w-[235px] px-6 rounded-[99px] border border-white">
              <span className="font-satoshi text-[16px] font-medium">Join Our Network</span>
              <img src="/longrightarrow.svg" alt="Arrow Right" className=" ml-2 h-2 w-12" />
            </button>
          </div>



          <div className="flex ">
              <div className=" w-[500px] h-[900px] mt-[150px] relative">
                {cards.map((card, index) => {
                  const position = cardPositions[index];
                  return (
                    <div
                      key={card.id}
                      className="absolute w-full transition-all duration-500"
                      style={{
                        transform: `translateY(${position * 220}px)`,
                        opacity: position === 3 ? 0 : 1,
                      }}
                    >
                      <div className="overflow-hidden bg-complex-gradient w-[450px] h-[200.89px] gap-[47.82px] rounded-[38.26px] border-t-[1.59px] m-2">
                        <div className="flex">
                          <div className="w-[70%] flex flex-col text-customWhite text-left p-6">
                            <p className="font-[Clash Display Variable] text-[30px] mt-8">
                              {card.contentHeading}
                            </p>
                            <p className="mt-3 font-satoshi text-[15.5px] font-normal">
                              {card.content}
                            </p>
                          </div>
                          <div className="w-[40%] mt-5 px-5">
                            <img
                              src={card.image}
                              alt=""
                              className="h-[127px] w-[127px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>


        
            </div>



          </div>

         
        </div>
      </div>


      {/* footer */}
      <div className="relative mt-28  text-white">
        <img 
          src="/footer.svg"
          alt="Footer background"
          className="w-full h-auto absolute bottom-0 left-0"
          style={{
            pointerEvents: 'none',
           
          }}
        />.
      </div>
    </div>
  );
};

export default LandingPage;
