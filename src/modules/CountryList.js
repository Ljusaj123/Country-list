import React from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

import { DoubleBubble } from "react-spinner-animated";

import "react-spinner-animated/dist/index.css";

function CountryList() {
  const { data, loading, error } = useFetch(
    "https://restcountries.com/v3.1/region/oceania"
  );

  if (loading) {
    return (
      <DoubleBubble
        text={"Loading..."}
        bgColor={"#fafafa"}
        width={"150px"}
        height={"150px"}
      />
    );
  }
  if (error.isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="country-list">
      {data.map((country, index) => {
        return <Card key={index} props={country} />;
      })}
    </div>
  );
}

export default CountryList;
