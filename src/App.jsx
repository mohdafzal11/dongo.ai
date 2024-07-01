import Header from "./components/Header/Header";
import Body from "./components/Body/Body.jsx";
import Video from "./components/Video/Video.jsx";
import Predictive from "./components/Predictive/Predictive.jsx";
import Benefit from "./components/Benefits/Benefit.jsx";
import Banner from "./Banner/Banner.jsx";
import Carousel from "./components/Carousel/Carousel.jsx";
import Tokenomics from "./components/Tokenomics/Tokenomics.jsx";
import Roadmap from "./components/Roadmap/Roadmap.jsx";
import "./index.css";
import background from "../src/assets/background.png";

function App() {
  return (
    <div className="bg-[#030517]">
      <div className="absolute right-0 ">
        <img src={background} alt="" />
      </div>
      <Header />
      <Body />
      <Video />
      <Predictive />
      <Banner />
      <Benefit />
      <Carousel />
      <Tokenomics />
      <Roadmap />
    </div>
  );
}

export default App;
