import Header from "./components/Header/Header";
import Body from "./components/Body/Body.jsx"
import Video from "./components/Video/Video.jsx";
import "./index.css"
import background from '../src/assets/background.png'


function App() {
  return <div className="bg-[#030517] px-10 ">
    <div className="absolute right-0 ">
      <img src={background} alt="" />
    </div>
    <Header/>
    <Body/>
    <Video/>
  </div>;
}

export default App;
