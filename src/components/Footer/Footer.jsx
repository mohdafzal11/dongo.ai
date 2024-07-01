import React from "react";
import telegram from "../../assets/telegram.svg";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center mx-10 py-8">
      <div className="flex space-x-4 mx-2">
        <div className="border rounded-full p-5">
          <svg
            className="h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#ffffff"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </div>
        <div className="border p-4 rounded-full flex  ">
          <img src={telegram} className="h-7" alt="" />
        </div>
      </div>
      <div className=" text-base text-[#A1AEE5]">
        Dongo.ai ©2024 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
