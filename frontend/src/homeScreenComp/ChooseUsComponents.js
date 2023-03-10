import React, { useEffect } from "react";
import cardBg from '../assets/cardBg.png'
import learning from '../assets/knowledge.png'
import premium from '../assets/premium-quality.png'
import update from '../assets/update.png'
import affordable from '../assets/low-price.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChooseUsComponents = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full px-4 md:px-16 mt-16">
      <div 
      data-aos="fade-up"
      data-aos-duration="1000"
      className="text-center">
        <p className="text-2xl font-semibold mb-2">Why Choose Us?</p>
        <p className="text-sm text-gray-500">
          A choice that makes the difference
        </p>
      </div>
      <div className="w-full mt-12 flex flex-col md:flex-row justify-between">
        <div 
        data-aos="fade-right"
        data-aos-duration="1000"
        className="bg-white relative flex flex-col border hover:border-corekColor1 duration-500 space-y-4 px-7 pt-5 pb-8 rounded-md shadow-md basis-[22.7%]">
          <img className="absolute top-0 right-0" src={cardBg} alt="" />
          <img className="w-16 h-16" src={learning} alt="" />
          <p className="text-lg font-semibold">Personalised learning</p>
          <p className="text-sm text-gray-600 leading-6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu</p>
        </div>
        <div 
        data-aos="fade-up"
        data-aos-duration="1000"
        className="bg-white mt-8 md:mt-auto relative flex flex-col border hover:border-corekColor1 duration-500 space-y-4 px-7 pt-5 pb-8 rounded-md shadow-md basis-[22.7%]">
          <img className="absolute top-0 right-0" src={cardBg} alt="" />
          <img className="w-16 h-16" src={premium} alt="" />
          <p className="text-lg font-semibold">Premium courses</p>
          <p className="text-sm text-gray-600 leading-6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu</p>
        </div>
        <div 
        data-aos="fade-up"
        data-aos-duration="1000"
        className="bg-white mt-8 md:mt-auto relative flex flex-col border hover:border-corekColor1 duration-500 space-y-4 px-7 pt-5 pb-8 rounded-md shadow-md basis-[22.7%]">
          <img className="absolute top-0 right-0" src={cardBg} alt="" />
          <img className="w-16 h-16" src={update} alt="" />
          <p className="text-lg font-semibold">Constant updates</p>
          <p className="text-sm text-gray-600 leading-6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu</p>
        </div>
        <div 
        data-aos="fade-left"
        data-aos-duration="1000"
        className="bg-white mt-8 md:mt-auto relative flex flex-col border hover:border-corekColor1 duration-500 space-y-4 px-7 pt-5 pb-8 rounded-md shadow-md basis-[22.7%]">
          <img className="absolute top-0 right-0" src={cardBg} alt="" />
          <img className="w-16 h-16" src={affordable} alt="" />
          <p className="text-lg font-semibold">Affordable</p>
          <p className="text-sm text-gray-600 leading-6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsComponents;
