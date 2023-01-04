import React from "react";
import freeImage from "../assets/free.png";
import { FcCheckmark } from "react-icons/fc";
import cardBg from '../assets/cardBg.png'
import courses from '../assets/courses.png'
import community from '../assets/community.png'

const CardComponents = () => {
  return (
    <div className="w-full px-16 flex flex-col md:flex-row justify-between">
      <div className="bg-white -mt-20 z-30 relative flex flex-col space-y-8 px-7 pt-5 pb-11 rounded-md shadow-md basis-[31%]">
        <img className="absolute top-0 right-0" src={cardBg} alt="" />
        <img className="w-16 h-16" src={freeImage} alt="" />
        <p className="text-lg font-semibold">Free Updates</p>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row items-center space-x-2">
            <span className="text-xl">
              <FcCheckmark />
            </span>
            <p className="text-gray-600">Cryptocurrency market updates.</p>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <span className="text-xl">
              <FcCheckmark />
            </span>
            <p className="text-gray-600">Industry leader interviews.</p>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <span className="text-xl">
              <FcCheckmark />
            </span>
            <p className="text-gray-600">Become a better trader.</p>
          </div>
        </div>
        <button className="border text-black rounded-md border-corekColor1 py-3 px-3 hover:bg-corekColor1 hover:text-black duration-500">SUBSCRIBE FOR FREE</button>
      </div>
      <div className="bg-white -mt-20 z-30 relative flex flex-col space-y-8 px-7 py-5 rounded-md shadow-md basis-[31%]">
        <img className="absolute top-0 right-0" src={cardBg} alt="" />
        <img className="w-16 h-16" src={courses} alt="" />
        <p className="text-lg font-semibold">Courses</p>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row items-center space-x-2">
            <span className="text-xl">
              <FcCheckmark />
            </span>
            <p className="text-gray-600">Successful trading fundamentals.</p>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <span className="text-xl">
              <FcCheckmark />
            </span>
            <p className="text-gray-600">3 trading strategies.</p>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <span className="text-xl">
              <FcCheckmark />
            </span>
            <p className="text-gray-600">Taught by professional traders.</p>
          </div>
        </div>
        <button className="border text-black rounded-md border-corekColor1 py-3 px-3 hover:bg-corekColor1 hover:text-black duration-500">EXPLORE COURSES</button>
      </div>
      <div className="bg-white -mt-20 z-30 relative flex flex-col space-y-8 px-7 py-5 rounded-md shadow-md basis-[31%]">
        <img className="absolute top-0 right-0" src={cardBg} alt="" />
        <img className="w-16 h-16" src={community} alt="" />
        <p className="text-lg font-semibold">Community</p>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row items-center space-x-2">
            <span className="text-xl">
              <FcCheckmark />
            </span>
            <p className="text-gray-600">Collaborate with other graduates.</p>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <span className="text-xl">
              <FcCheckmark />
            </span>
            <p className="text-gray-600">Access to professional traders.</p>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <span className="text-xl">
              <FcCheckmark />
            </span>
            <p className="text-gray-600">View daily market scans.</p>
          </div>
        </div>
        <button className="border text-black rounded-md border-corekColor1 py-3 px-3 hover:bg-corekColor1 hover:text-black duration-500">PREMIUM SUBSCRIPTIONS</button>
      </div>
    </div>
  );
};

export default CardComponents;
