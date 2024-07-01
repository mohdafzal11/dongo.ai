import React from "react";
import "../../index.css";
import logo from "../../assets/logo.png";

const Tokenomics = () => {
  return (
    <section className="mx-10 md:mx-20">
      <div className="mt-12 md:mt-0 flex flex-col justify-center items-center text-[#A1AEE5]">
        <div className="text-white text-center mt-6">
          <h1 className="">
            <span className="text-4xl  md:text-6xl">Tokenomics</span>
          </h1>
        </div>
        <div className="my-6 md:my-8 flex justify-center items-center   text-center">
          <p className="text-base md:text-xl ">
            Our tokenomics have been crafted to drive ecosystem growth and
            sustainability with a 4% transaction tax supporting development,
            holders, and liquidity. Our revenue-sharing model incentivizes
            long-term investment and community loyalty. Stake $DONGO for rewards
            and revenue shares, ensuring your role in our innovative and
            successful future.
          </p>
        </div>

      
        <div className="flex flex-col lg:flex-row text-white items-center justify-center space-y-10 lg:space-y-0">
          <div className="space-y-4 lg:w-[33%]">
            <div className="flex  items-center space-x-2">
              <div className="text-lg font-bold"> Max Supply</div>
              <div className="text-base text-gray-400"> 1,000,000,000</div>
            </div>

            <div className="flex  items-center space-x-2">
              <div className="text-lg font-bold">Symbol</div>
              <div className="text-base text-gray-400">$DONGO</div>
            </div>

            <div className="flex  items-center space-x-2">
              <div className="text-lg font-bold">Network</div>
              <div className="text-base text-gray-400">ETH (ERC-20)</div>
            </div>
            <div className="flex  items-center space-x-2">
              <div className="text-lg font-bold">Buy/Sell Tax</div>
              <div className="text-base text-gray-400">4% / 4%</div>
            </div>
            <div className="flex flex-col   space-y-1">
              <div className="text-lg font-bold">Contract Address</div>
              <div className="text-base text-gray-400 ">
                <p>0x8c213AE332274e6314Bf4</p>
                <p> cF989604e7f61162967</p>
              </div>
            </div>
          </div>

          <div className="flex lg:w-[33%]">
            <div className="flex border p-10 rounded-full">
              <div className="border p-10  rounded-full">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:w-[33%]">
            <div className="border py-3 px-5 rounded-lg space-y-1">
              <h1 className="text-lg font-bold text-white">Supply</h1>
              <p className="text-base text-gray-400">
                12.5% Team & Seed Round (locked)
              </p>
              <p className="text-base text-gray-400">7.5% Marketing</p>
              <p className="text-base text-gray-400">80% Liquidity</p>
            </div>

            <div className="border py-3 px-5 rounded-lg space-y-1">
              <h1 className="text-lg font-bold text-white">
                Buy/Sell Tax Allocations
              </h1>
              <p className="text-base text-gray-400">
                Marketing and User Acquisition
              </p>
              <p className="text-base text-gray-400">Dongo Development Lab</p>
              <p className="text-base text-gray-400">Team & Staking Pool</p>
            </div>
          </div>
        </div>


        <div className="mt-16 flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a
          href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x8c213AE332274e6314Bf4cF989604e7f61162967"
          className="bg-[#1069A8]  rounded-full inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white  hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
         
        >
          BUY &#x24;DONGO
          <span className="flex justify-between  items-center">
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
            </svg>
          </span>
        </a>
      </div>
      </div>
    </section>
  );
};

export default Tokenomics;
