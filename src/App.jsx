import Header from "./components/Header/Header";
import Body from "./components/Body/Body.jsx"
import Video from "./components/Video/Video.jsx";
import Predictive from "./components/Predictive/Predictive.jsx";
import "./index.css"
import background from '../src/assets/background.png'


function App() {
  return <div className="bg-[#030517]">
    <div className="absolute right-0 ">
      <img src={background} alt="" />
    </div>
    <Header/>
    <Body/>
    <Video/>
     <Predictive/>
  </div>;
}

export default App;
