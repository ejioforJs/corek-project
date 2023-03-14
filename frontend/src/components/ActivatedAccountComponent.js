import React from 'react'
import courseHeroimg from "../assets/singleCourseHero.jpg";

const ActivatedAccountComponent = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="h-[33vh] md:h-[55vh] w-full -mt-24"
          src={courseHeroimg}
          alt="hero"
        />
        <div className="absolute z-10 h-full top-0 w-full bg-gradient-to-t opacity-60 from-corekColor3 to-corekColor3"></div>
        <div className="z-20 absolute border-l-[3px] border-corekColor1 pl-4 md:pl-5 text-white text-2xl md:text-[38px] top-1/2 transform -translate-y-1/2 mt-8 md:mt-auto md:-translate-y-0 md:top-auto md:bottom-24 md:left-16">
          ACCOUNT ACTIVATED
        </div>
      </div>
      <div className='mt-16 px-4 md:px-16'>
        <div className='text-2xl font-bold'>User Activation</div>
        <div className='mt-8 bg-[#90EE90] p-4 text-sm text-green-900'>Congrats,your account have been successfully activated. You can login now!!</div>
      </div>
    </div>
  )
}

export default ActivatedAccountComponent
