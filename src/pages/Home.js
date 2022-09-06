import React, { useState } from "react";
import Header from "../modules/Header";
import DataContext from "../contexts/DataContext";
import Search from "../modules/Search";
import CountryList from "../modules/CountryList";

function Home() {
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  return (
    <>
      <Header />

      <DataContext.Provider value={{ url, setUrl }}>
        <Search />
        <CountryList />
      </DataContext.Provider>
    </>
  );
}

export default Home;
