import React, { useEffect } from "react";
import freeImage from "../assets/free.png";
import { FcCheckmark } from "react-icons/fc";
import cardBg from "../assets/cardBg.png";
import courses from "../assets/courses.png";
import community from "../assets/community.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

const CardComponents = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const notAvailable = () => {
    toast.warning("Functionality not available yet")
  }

  return (
    <div className="w-full px-4 md:px-16 flex flex-col md:flex-row justify-between">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="bg-white -mt-12 md:-mt-20 border z-30 relative flex flex-col space-y-8 px-7 pt-5 pb-11 rounded-md shadow-md basis-[31%]"
      >
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
        <button 
        onClick={notAvailable}
        className="border text-black rounded-md border-corekColor1 py-3 px-3 hover:bg-corekColor1 hover:text-black duration-500">
          SUBSCRIBE FOR FREE
        </button>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="bg-white border mt-8 md:-mt-20 z-30 relative flex flex-col space-y-8 px-7 py-5 rounded-md shadow-md basis-[31%]"
      >
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
        <Link to="/courses" className="border text-black rounded-md border-corekColor1 py-3 px-3 hover:bg-corekColor1 hover:text-black duration-500">
          EXPLORE COURSES
        </Link>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="bg-white border mt-8 md:-mt-20 z-30 relative flex flex-col space-y-8 px-7 py-5 rounded-md shadow-md basis-[31%]"
      >
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
        <button 
        onClick={notAvailable}
        className="border text-black rounded-md border-corekColor1 py-3 px-3 hover:bg-corekColor1 hover:text-black duration-500">
          PREMIUM SUBSCRIPTIONS
        </button>
      </div>
    </div>
  );
};

export default CardComponents;
