import React from "react";
import buttonBg from "../../assets/buttonBg.png";

const Community = () => {
  return (
    <section className="z-20 relative mx-16 md:mx-40 lg:mx-10 my-8">
      <div>
        <div className="flex flex-col space-y-4 md:justify-center md:items-center lg:items-start">
          <div className="w-60 bg-[#17192F] flex justify-center items-center py-2 rounded-3xl  space-x-2">
            <div className=" text-xl text-[#A1AEE5]">Enhanced Solutions</div>
            <div>
              <svg
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
              </svg>
            </div>
          </div>
          <div className="text-white  ">
            <h1 className="text-center lg:text-left">
              <span className=" text-3xl  md:text-4xl">
                Join Our Dongo Communinty
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-1 gap-20 lg:grid-cols-2 my-8">
        <div className="relative flex justify-between border rounded-lg h-48 md:h-60 lg:h-72 ">
          <img src={buttonBg} className="absolute top-0 right-0 h-48 md:h-60 lg:h-72 2xl:hidden" alt="" />

          <div className="text-white space-y-3 absolute bottom-5 left-5   ">
            <div className="text-base md:text-xl lg:text-2xl">Check Our X</div>
            <p className="text-sm md:text-base lg:text-lg text-[#A1AEE5]">Connect with us on X</p>
          </div>
          <div className="absolute right-0">
            <svg
              fill="#222341"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className=" h-20 md:h-40 "
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </div>
        </div>


        <div className="relative flex justify-between border rounded-lg  h-48 md:h-60 lg:h-72">
          <img src={buttonBg} className="absolute top-0 right-0 h-48 md:h-60 lg:h-72 2xl:hidden" alt="" />

          <div className="text-white space-y-3 absolute bottom-5 left-5  ">
            <div className="text-base md:text-xl lg:text-2xl">Check Our Telegram</div>
            <p className="text-sm md:text-base lg:text-lg text-[#A1AEE5]">Connect with us on Telegram</p>
          </div>
          <div className="absolute right-0">
          <svg
              className="h-20 md:h-40"
              fill="#222341"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
            </svg>
          </div>
        </div>

      
      </div>

      <div className="flex flex-col space-y-4 mt-24 ">
        <h1 className="text-white text-xl">Disclaimer</h1>
        <p className="text-[#A1AEE5] text-base">
          The content provided on this website, including but not limited to
          articles, analyses, opinions, and any other information, is for
          informational purposes only. It should not be considered as financial,
          investment, or trading advice. Users are encouraged to conduct their
          own research and consult with a qualified professional before making
          any financial decisions.
        </p>
        <hr className="text-white" />
      </div>

    </section>
  );
};

export default Community;
