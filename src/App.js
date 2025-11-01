import TopBar from "./Components/topBar/topBar";
import LeftBar from "./Components/leftBar/leftBar";
import Gallery from "./Components/gallery/gallery";
import './App.css';

function App() {
  return (
    <div className="App">
       <LeftBar/>
       <div className="rightHome">
        <TopBar/>
        <Gallery/>
      </div>
    </div>
  );
}

export default App;
