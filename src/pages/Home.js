import React, { useState } from "react";
import Header from "../modules/Header";
import Search from "../modules/Search";
import CountryList from "../modules/CountryList";

function Home({ mode, setMode }) {
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  return (
    <div className="main-background">
      <Header mode={mode} setMode={setMode} />
      <Search setUrl={setUrl} />
      <CountryList url={url} />
    </div>
  );
}

export default Home;
