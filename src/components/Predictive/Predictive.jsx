import React from "react";
import chat from "../../assets/chat.png";

const Predictive = () => {
  return (
    <div className=" flex flex-col lg:flex-row mx-12 lg:mx-36">
      <div className="w-full lg:w-1/2 ">
        <div className="flex flex-col justify-center  w-full h-full">
          <h1 className=" text-4xl  lg:text-6xl text-white text-center lg:text-left lg:w-[90%]">
            Predictive Market Insights
          </h1>
          <div className="text-center lg:text-left lg:w-[70%] my-4 lg:my-8">
            <p className="text-xl text-[#A1AEE5]">
              Anticipate market trends with Dongo's Predictive Market Insights.
              By processing historical and current market data, our AI provides
              accurate forecasts and sentiment analysis, granting angel
              investors and project founders a strategic edge in a rapidly
              evolving digital asset landscape.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[40%] flex mx-auto  my-12 lg:my-0">
        <img decoding="async" src={chat} alt="" loading="lazy" />
      </div>
    </div>
  );
};

export default Predictive;
