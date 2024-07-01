import roadmap from "../../assets/roadmap.png";

const Roadmap = () => {
  return (
    <section className="flex justify-between mx-60">
      <div className=" space-y-4">
        <div className="bg-[#17192F] flex justify-center items-center py-2 rounded-3xl px-4 space-x-2 w-[80%]">
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
        <div className="text-white  text-center ">
          <h1 className="">
            <span className="text-3xl  md:text-5xl">Our Roadmap</span>
          </h1>
        </div>
      </div>
      <div className="w-10">
        <img src={roadmap} alt="" />
      </div>
      <div className="flex flex-col space-y-16">
        <div className="">
          <div className="flex flex-col  space-y-1 text-white">
            <h2 className="text-base text-[#07487B]">Phase 1</h2>
            <h1 className="text-xl font-bold">Proof of Concept</h1>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                {" "}
                Whitepaper Release
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Seed Round Investments
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Development of Dongo Platform
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Iterate Based on Beta Feedback
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col  space-y-1 text-white">
            <h2 className="text-base text-[#07487B]">Phase 2</h2>
            <h1 className="text-xl font-bold">Alpha</h1>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                {" "}
                Website & Social Media Launch
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Alpha Launch
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Screener Data Implementation
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Smart Contract Data Implementation
              </div>
            </div>

            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Social API Integration
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Token Launch
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Early Adaptor Program
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col  space-y-1 text-white">
            <h2 className="text-base text-[#07487B]">Phase 3</h2>
            <h1 className="text-xl font-bold">Beta</h1>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                {" "}
                Beta Platform Launch With Early Access
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Referral Program
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                AI Powered Portfolio Management
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                $DONGO Staking
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Dongo Co-Pilot
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col  space-y-1 text-white">
            <h2 className="text-base text-[#07487B]">Phase 4</h2>
            <h1 className="text-xl font-bold">The Launch</h1>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                {" "}
                Real-Time AI Powered Diagrams & Charts
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Dedicated Remote Procedure Call
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Support for Solana
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Telegram Integration
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Decentralized Storage
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                AI Powered news and RSS feed
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col  space-y-1 text-white">
            <h2 className="text-base text-[#07487B]">Phase 5</h2>
            <h1 className="text-xl font-bold">SDK</h1>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                {" "}
                Dongo SDK
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Dedicated Remote Procedure Call
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Custom Alert Builder
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Data Feed and APIs
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                On Chain Querying
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <svg
                  className="h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <div className="text-base text-gray-400 font-bold">
                Sector Analysis
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
