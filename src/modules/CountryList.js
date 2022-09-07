import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

import { DoubleBubble } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

function CountryList({ url }) {
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
    return (
      <div className="container country-error">
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="country-list container">
      {data.map((country, index) => {
        return (
          <Link to={`/countries/${country.cca3}`} key={index}>
            <Card props={country} />
          </Link>
        );
      })}
    </div>
  );
}

export default CountryList;
