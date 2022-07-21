import React from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

function CountryList() {
  const { data, loading, error } = useFetch(
    "https://restcountries.com/v3.1/region/oceania"
  );

  if (loading) {
    return <p>Loading</p>;
  }
  // if (error) {
  //   return <p>error...</p>;
  // }

  return (
    <div className="country-list">
      {data.map((country, index) => {
        return <Card key={index} props={country} />;
      })}
    </div>
  );
}

export default CountryList;
