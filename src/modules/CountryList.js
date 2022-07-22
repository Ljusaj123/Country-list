import React from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import DataContext from "../contexts/DataContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { DoubleBubble } from "react-spinner-animated";

import "react-spinner-animated/dist/index.css";

function CountryList() {
  const { url } = useContext(DataContext);
  const { data, loading, error } = useFetch(url);

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
        return (
          <Link to={`/country/${country.name.common}`} key={index}>
            <Card props={country} />
          </Link>
        );
      })}
    </div>
  );
}

export default CountryList;
