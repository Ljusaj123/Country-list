import React, { useState } from "react";
import Header from "../modules/Header";
import Search from "../modules/Search";
import CountryList from "../modules/CountryList";

function Home() {
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  return (
    <>
      <Header />
      <Search setUrl={setUrl} />
      <CountryList url={url} />
    </>
  );
}

export default Home;
