import React from 'react'

const Header = () => {
  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    else {
      console.log(`Element with ID ${sectionId} not found`);
    }
  };

  return (
    <div className='flex border-b-[1px] border-neutral-600  py-[17px] px-[70px] justify-between items-center'>
      <div className='flex w-[175px] h-[22.6px]'>
        <img src="/logotxt.svg" alt="pathpulse logo" />
      </div>
          
      <div className='border-[1px] bg-black/40 backdrop-blur-sm border-[#0D342C] rounded-[32.27px] '>
        <div className='bg-conic-fill flex rounded-[32.27px] px-[24px] py-[12.2px] gap-x-[28px] bg-opacity-30'>
          <button 
            className='text-[14.12px] font-satoshi text-white cursor-pointer hover:opacity-80'
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button 
            className='text-[14.12px] font-satoshi text-white cursor-pointer hover:opacity-80'
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className='text-[14.12px] font-satoshi text-white cursor-pointer hover:opacity-80'
            onClick={() => scrollToSection('solutions')}
          >
            Our Solutions
          </button>
          <button 
            className='text-[14.12px] font-satoshi text-white cursor-pointer hover:opacity-80'
            onClick={() => scrollToSection('tech')}
          >
            Our tech
          </button>
        </div>
      </div>

      <div className='flex bg-black/40 border-l-[#0D342C] border-t-[#0D342C] border-r-[#0D342C] border-l-[1px] border-r-[1px] border-t-[1px] px-[20.17px] py-[12.1px] rounded-[48.41px] gap-x-[16.4px] backdrop-blur-sm'>
        <img src="/IconStar.svg" className='w-[20px] h-[20px]' alt="star icon" />
        <p className='text-[14.12px] font-satoshi text-white'>Contact Us</p>
      </div>
    </div>
  );
};

export default Header;