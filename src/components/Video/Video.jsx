import video from "../../assets/video.mp4";

const Video = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-3/4">
        <video
          muted
          autoPlay
          loop
          playsInline
          className="object-cover md:w-full md:h-ful h-[100%] w-[100%] rounded-3xl"
        >
          <source className="" src="https://framerusercontent.com/assets/Yyj9XRC7w6gcoeeRMHzn6MVME.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="my-12 px-6 py-3 border-opacity-20 border-2 border-[rgba(161,174,229,0.2)] bg-gradient-to-b from-[rgb(21,119,189)] to-[rgb(7,90,150)] opacity-100 rounded-full shadow-inner">
        <a
          className=" "
          href="https://app.dongo.ai"
          target="_blank"
          rel="noopener"
          tabIndex="0"
        >
          <div
              className="text-[17px] font-medium text-white"
            >
              <span className="">
                TRY BETA NOW
              </span>
            </div>
        </a>
      </div>
    </div>
  );
};

export default Video;
