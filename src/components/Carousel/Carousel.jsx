import React from "react";

const Carousel = () => {
  return (
    <section className="py-8 bg-[#030517] text-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3">
        <a
          className="bg-[#17192F] block rounded-xl border  border-gray-200 p-8 shadow-xl transition  hover:border-pink-500/10 hover:shadow-blue-500/20"
          href="#"
        >
          <h2 className="mt-4 text-2xl font-bold ">Staking & Revenue Share</h2>

          <p className="mt-1 text-base text-[#A1AEE5]">
            Stake $DONGO to earn rewards in $DONGO and $ETH, plus a share of
            platform revenue. The more and longer you stake, the greater the
            benefits.
          </p>
        </a>

        <a
          className="bg-[#17192F] block rounded-xl border  border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-blue-500/20"
          href="#"
        >
          <h2 className="mt-4 text-2xl font-bold text-white">
            Partner Program
          </h2>

          <p className="mt-1 text-base text-[#A1AEE5]">
            Join the Dongo.ai Partner Program to earn up to 25% commission on
            referrals, with unlimited potential earnings. Leverage your network
            for a sustainable income.
          </p>
        </a>

        <a
          className=" bg-[#17192F] block rounded-xl border  border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-blue-500/20"
          href="#"
        >
          <h2 className="mt-4 text-2xl font-bold text-white">
            Airdrops & Partners
          </h2>

          <p className="mt-1 text-base text-[#A1AEE5]">
            Exclusive airdrops and pre-sale access for $DONGO holders, rewarding
            our amazing community loyalty and participation in our ecosystem.
          </p>
        </a>
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
    </section>
  );
};

export default Carousel;
