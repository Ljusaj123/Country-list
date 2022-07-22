import "./styles/css/styles.css";
import Header from "./modules/Header";
import Search from "./modules/Search";
import CountryList from "./modules/CountryList";
import DataContext from "./contexts/DataContext";
import { useState } from "react";
function App() {
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");

  return (
    <div className="App">
      <Header />

      <DataContext.Provider value={{ url, setUrl }}>
        <Search />
        <CountryList />
      </DataContext.Provider>
    </div>
  );
}

export default App;
