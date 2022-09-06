import { BrowserRouter, Route, Routes } from "react-router-dom";
import Country from "./pages/Country";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries/:id" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
