import React from 'react'

const Footer = () => {
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
  };

  return (
    <div>
        <div className='mx-[70px] flex justify-between pb-[100px]'> 
            {/* left section div */}
            <div className='flex gap-x-[90px]'>
              {/* first div */}
              <div className='flex flex-col'>
                <div>
                  <img src='/logotxt.svg' alt='path pulse logo'/>
                </div>
                <div className='mt-[14px]'>
                  <p className='font-satoshi text-white text-[14px]'>Let's Build Smarter Cities Together</p>
                </div>
                <div className='flex gap-x-[24px] mt-[24px]'>
                    <img src='/Twitter.svg' alt='social icons' onClick={() => window.open('https://twitter.com/pathpulse_ai', '_blank')} className="cursor-pointer"/>
                    <img src='/Linkedin.svg' alt='social icons' onClick={() => window.open('https://www.linkedin.com/company/pathpulse-ai/', '_blank')} className="cursor-pointer"/>
                    <img src='/Medium.svg' alt='social icons' onClick={() => window.open('https://medium.com/@pathpulse.ai', '_blank')} className="cursor-pointer"/>
                    <img src='/Youtube.svg' alt='social icons' onClick={() => window.open('https://www.youtube.com/@PathPulse_ai', '_blank')} className="cursor-pointer"/>
                    <img src='/Telegram.svg' alt='social icons' onClick={() => window.open('https://t.me/PathPulseNews', '_blank')} className="cursor-pointer"/>
                    <img src='/Instagram.svg' alt='social icons' onClick={() => window.open('https://www.instagram.com/pathpulse.ai/', '_blank')} className="cursor-pointer"/>
                </div>
              </div>

              {/* second div */}
              <div className='flex flex-col gap-y-[16px]'>
                <div>
                  <p className='text-white font-bold text-[17px] font-clash'>Navigate</p>
                </div>

                <div className='flex flex-col gap-y-[12px]'>     
                  <p className='text-footerColor text-[14px] font-satoshi cursor-pointer hover:text-white' 
                     onClick={() => scrollToSection('about')}>
                    About Us
                  </p>
                  <p className='text-footerColor text-[14px] font-satoshi cursor-pointer hover:text-white' 
                     onClick={() => scrollToSection('solutions')}>
                    Our Solutions
                  </p>
                  <p className='text-footerColor text-[14px] font-satoshi cursor-pointer hover:text-white' 
                     onClick={() => scrollToSection('tech')}>
                    Our Tech
                  </p>
                  <p className='text-footerColor text-[14px] font-satoshi cursor-pointer hover:text-white' 
                    onClick={() => window.open('https://t.me/PathPulseChat', '_blank')}>
                    Our Community
                  </p>
                </div>
              </div>
            </div>

            {/* right section div */}
            <div className='flex flex-col gap-y-[24px]'>
                <div>
                    <p  className='font-clash text-[32px]' style={{
                         background: 'linear-gradient(180deg, #FFF 2.39%, #83DBC9 91.52%)',
                         backgroundClip: 'text',
                         WebkitBackgroundClip: 'text',
                         WebkitTextFillColor: 'transparent',
                       }}>Get in touch with us!</p>
                </div>

                <div className='border-[1px] border-footerColor rounded-[99px] flex justify-between items-center'>
                    <p className='text-footerColor font-satoshi ml-[20px] my-[10px] text-[18px] mr-[70px]'>Let's Talk</p>
                    <div onClick={() => window.open('https://calendly.com/pathpulse-ai', '_blank')} className='border-[1px] bg-gradient-to-t from-[#1a7d70] to-[#013738] pl-[24px]  text-lg   text-white transition-all hover:shadow-lg hover:shadow-[#03855C]/25 active:scale-95 rounded-[54px]  border-footerColor flex items-center justify-center cursor-pointer'>
                        <p className='text-white px-[60px] py-[16px] font-clash text-[18px]  '>Book a Call Now</p>
                    </div>
                </div>

                <p className='text-footerColor text-[14px]'>© 2024 PathPulse.ai</p>

            </div>
        </div>
    </div>
  )
}

export default Footer