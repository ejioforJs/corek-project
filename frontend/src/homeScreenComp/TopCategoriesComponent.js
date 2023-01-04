import React from "react";
import bitcoin from "../assets/bitcoin-logo.png";
import blockchain from "../assets/blockchain.png";
import cryptocurrency from "../assets/cryptocurrencies.png";
import investment from "../assets/investment.png";
import business from "../assets/management.png";
import financial from "../assets/stock-market.png";

const TopCategoriesComponent = () => {
  return (
    <div className="mt-16 w-full topCategory py-16 px-16">
      <p className="text-center text-2xl text-white font-bold">
        Top Categories
      </p>
      <div className="flex flex-wrap content-around mt-8">
        <div className="p-3 basis-1/4">
          <div className="bg-white duration-500 px-6 py-3 flex flex-row items-center cursor-pointer space-x-6 text-gray-700 rounded-md">
            <img src={bitcoin} alt="bitcoin" />
            <p>Bitcoin</p>
          </div>
        </div>
        <div className="p-3 basis-1/4">
          <div className="bg-white px-6 py-3 flex flex-row items-center cursor-pointer space-x-6 text-gray-700 rounded-md">
            <img src={blockchain} alt="blockchain" />
            <p>Blockchain</p>
          </div>
        </div>
        <div className="p-3 basis-1/4">
          <div className="bg-white px-6 py-3 flex flex-row items-center cursor-pointer space-x-6 text-gray-700 rounded-md">
            <img src={business} alt="business" />
            <p>Business</p>
          </div>
        </div>
        <div className="p-3 basis-1/4">
          <div className="bg-white px-6 py-3 flex flex-row items-center cursor-pointer space-x-6 text-gray-700 rounded-md">
            <img src={cryptocurrency} alt="cryptocurrency" />
            <p>Cryptocurrency</p>
          </div>
        </div>
        <div className="p-3 basis-1/4">
          <div className="bg-white px-6 py-3 flex flex-row items-center cursor-pointer space-x-6 text-gray-700 rounded-md">
            <img src={financial} alt="financial" />
            <p>Financial Trading</p>
          </div>
        </div>
        <div className="p-3 basis-1/4">
          <div className="bg-white px-6 py-3 flex flex-row items-center cursor-pointer space-x-6 text-gray-700 rounded-md">
            <img src={investment} alt="investment" />
            <p>Investment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategoriesComponent;
