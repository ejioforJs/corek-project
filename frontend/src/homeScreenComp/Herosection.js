import React from "react";
import image3 from "../assets/image3.jpg";

const Herosection = () => {
  return (
    <div className="relative">
      <img className="h-screen w-full -mt-24" src={image3} alt="hero" />
      <div className="absolute z-10 h-full top-0 w-full bg-gradient-to-t opacity-60 from-black to-black"></div>
      <div className="absolute z-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-white text-6xl font-bold">CRYPTO</p>
        <p className="text-white text-6xl font-thin mt-1">Trading Course</p>
        <p className="text-gray-300 text-sm mt-4">
          This Trading Course Is The #1 Cryptocurrency Trading Course. Traders
          Use To Learn, Practise and Drastically Improve. Their Investment
          Results.
        </p>
        <button className="border text-white rounded-md border-corekColor1 w-auto py-3 px-5 mt-10 hover:bg-corekColor1 hover:text-black duration-500">
          EXPLORE COURSES NOW
        </button>
      </div>
    </div>
  );
};

export default Herosection;
