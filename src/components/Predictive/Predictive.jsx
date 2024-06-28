import React from "react";
import chat from "../../assets/chat.png";

const Predictive = () => {
  return (
    <div className=" flex  mx-20">
      <div className="w-1/2 ">
        <div className="flex flex-col justify-center  w-full h-full">
          <h1 className="text-6xl text-white w-[80%]">
            Predictive Market Insights
          </h1>
          <div className="w-[70%] my-8">
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
      <div className="w-[40%] flex mx-auto">
        <img decoding="async" src={chat} alt="" loading="lazy" />
      </div>
    </div>
  );
};

export default Predictive;
