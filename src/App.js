import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Country from "./pages/Country";
import Home from "./pages/Home";
import "./styles/css/styles.css";
function App() {
  const [mode, setMode] = useState(true);

  return (
    <div className={mode ? "light-mode" : "dark-mode"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
          <Route
            path="/countries/:id"
            element={<Country mode={mode} setMode={setMode} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
