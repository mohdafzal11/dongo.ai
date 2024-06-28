import Header from "./components/Header/Header";
import Body from "./components/Body/Body.jsx"
import "./index.css"
import background from '../src/assets/background.png'


function App() {
  return <div className="bg-[#030517] ">
    <div className="absolute right-0 ">
      <img src={background} alt="" />
    </div>
    <Header/>
    <Body/>
  </div>;
}

export default App;
