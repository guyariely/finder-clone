import MenuBar from "../MenuBar/MenuBar";
import SideBar from "../Sidebar/Sidebar";
import Files from "../Files/Files";
import StatusBar from "../StatusBar/StatusBar";
import "./App.scss";
import "./mojave-wallpaper.jpg";

function App() {
  return (
    <div id="window">
      <div id="finder">
        <MenuBar />
        <SideBar />
        <Files />
        <StatusBar />
      </div>
    </div>
  );
}

export default App;
