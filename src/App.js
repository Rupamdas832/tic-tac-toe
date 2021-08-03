import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Game } from "./Components/pages/Game/Game";
import { PlayMode } from "./Components/pages/PlayMode/PlayMode";
import { PlaySide } from "./Components/pages/PlaySide/PlaySide";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<PlayMode />} />
          <Route path="/mode" element={<PlaySide />} />
          <Route path="/game/:side" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
