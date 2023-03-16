import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import bitcoin from "../assets/bitcoin-logo.png";
import cryptocurrency from "../assets/cryptocurrencies.png";
import business from "../assets/management.png";
import financial from "../assets/stock-market.png";
import { Store } from "../Store";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TopCategoriesComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const {dispatch: ctxDispatch} = useContext(Store)
  return (
    <div className="mt-16 w-full topCategory py-16 px-4 md:px-16">
      <p 
      data-aos="fade-up"
      data-aos-duration="1000"
      className="text-center text-2xl text-white font-bold">
        Top Categories
      </p>
      <div className="flex flex-col md:flex-row md:flex-wrap md:content-around mt-8">
        <div 
        data-aos="fade-right"
        data-aos-duration="1000"
        className="py-3 md:p-3 basis-1/4">
          <Link 
          onClick={() => ctxDispatch({type: "ADD_SEARCH", payload: "forex"})}
          to="/courses"
          className="bg-white border-2 hover:border-corekColor1 duration-500 px-6 py-2 flex flex-row items-center cursor-pointer space-x-6 text-gray-700 rounded-md">
            <img src={bitcoin} alt="Forex" />
            <p>Forex</p>
          </Link>
        </div>
        <div 
        data-aos="fade-up"
        data-aos-duration="1000"
        className="py-3 md:p-3 basis-1/4">
          <Link 
          onClick={() => ctxDispatch({type: "ADD_SEARCH", payload: "cryptocurrency"})}
          to="/courses"
          className="bg-white border-2 hover:border-corekColor1 duration-500 px-6 py-2 flex flex-row items-center cursor-pointer space-x-6 text-gray-700 rounded-md">
            <img src={cryptocurrency} alt="cryptocurrency" />
            <p>Cryptocurrency</p>
          </Link>
        </div>
        <div 
        data-aos="fade-up"
        data-aos-duration="1000"
        className="py-3 md:p-3 basis-1/4">
          <Link 
          onClick={() => ctxDispatch({type: "ADD_SEARCH", payload: "stock trading"})}
          to="/courses"
          className="bg-white border-2 hover:border-corekColor1 duration-500 px-6 py-2 flex flex-row items-center cursor-pointer space-x-6 text-gray-700 rounded-md">
            <img src={financial} alt="stock trading" />
            <p>Stock Trading</p>
          </Link>
        </div>
        <div 
        data-aos="fade-left"
        data-aos-duration="1000"
        className="py-3 md:p-3 basis-1/4">
          <Link 
          onClick={() => ctxDispatch({type: "ADD_SEARCH", payload: "digital marketing"})}
          to="/courses"
          className="bg-white border-2 hover:border-corekColor1 duration-500 px-6 py-2 flex flex-row items-center cursor-pointer space-x-6 text-gray-700 rounded-md">
            <img src={business} alt="digital marketing" />
            <p>Digital Marketing</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopCategoriesComponent;
