import React from "react";
import cardBg from '../assets/cardBg.png'
import learning from '../assets/knowledge.png'
import premium from '../assets/premium-quality.png'
import update from '../assets/update.png'
import affordable from '../assets/low-price.png'

const ChooseUsComponents = () => {
  return (
    <div className="w-full px-16 mt-16">
      <div className="text-center">
        <p className="text-2xl font-semibold mb-2">Why Choose Us?</p>
        <p className="text-sm text-gray-500">
          A choice that makes the difference
        </p>
      </div>
      <div className="w-full mt-12 flex flex-col md:flex-row justify-between">
        <div className="bg-white relative flex flex-col border hover:border-corekColor1 duration-500 space-y-4 px-7 pt-5 pb-8 rounded-md shadow-md basis-[22.7%]">
          <img className="absolute top-0 right-0" src={cardBg} alt="" />
          <img className="w-16 h-16" src={learning} alt="" />
          <p className="text-lg font-semibold">Personalised learning</p>
          <p className="text-sm text-gray-600 leading-6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu</p>
        </div>
        <div className="bg-white relative flex flex-col border hover:border-corekColor1 duration-500 space-y-4 px-7 pt-5 pb-8 rounded-md shadow-md basis-[22.7%]">
          <img className="absolute top-0 right-0" src={cardBg} alt="" />
          <img className="w-16 h-16" src={premium} alt="" />
          <p className="text-lg font-semibold">Premium courses</p>
          <p className="text-sm text-gray-600 leading-6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu</p>
        </div>
        <div className="bg-white relative flex flex-col border hover:border-corekColor1 duration-500 space-y-4 px-7 pt-5 pb-8 rounded-md shadow-md basis-[22.7%]">
          <img className="absolute top-0 right-0" src={cardBg} alt="" />
          <img className="w-16 h-16" src={update} alt="" />
          <p className="text-lg font-semibold">Constant updates</p>
          <p className="text-sm text-gray-600 leading-6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu</p>
        </div>
        <div className="bg-white relative flex flex-col border hover:border-corekColor1 duration-500 space-y-4 px-7 pt-5 pb-8 rounded-md shadow-md basis-[22.7%]">
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
