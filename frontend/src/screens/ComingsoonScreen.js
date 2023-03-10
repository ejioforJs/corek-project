import React from 'react'
import courseHeroimg from "../assets/singleCourseHero.jpg";

const ComingsoonScreen = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="h-[55vh] w-full -mt-24"
          src={courseHeroimg}
          alt="hero"
        />
        <div className="absolute z-10 h-full top-0 w-full bg-gradient-to-t opacity-60 from-corekColor3 to-corekColor3"></div>
        <div className="z-20 absolute border-l-[3px] border-corekColor1 pl-4 md:pl-5 text-white text-2xl md:text-[38px] bottom-24 md:left-16">
          COMING SOON
        </div>
      </div>
      <div className='px-16 mt-12 text-center'>
        <div className='text-2xl font-semibold'>Stripe payment functionality coming soon...</div>
        <div className='mt-8 flex justify-center'><iframe title='coming soon' src="https://giphy.com/embed/iTWomlMFQXIA5DN0VZ" width="480" height="321" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p></div>
      </div>
    </div>
  )
}

export default ComingsoonScreen
