import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { DoubleBubble } from "react-spinner-animated";
import Header from "./modules/Header";
import "react-spinner-animated/dist/index.css";

function Country() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://restcountries.com/v3.1/alpha/${id}`
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
    <div className="country">
      {console.log(data)}
      <Header />
      <div className="country-container">
        {data.map((d, index) => {
          const {
            flags,
            name,
            population,
            region,
            subregion,
            capital,
            currencies,
            languages,
            tld,
            borders,
          } = d;

          const curren = Object.keys(currencies);
          console.log(curren);

          const lang = Object.values(languages);

          return (
            <div className="country-info" key={index}>
              <div className="country-info__flag">
                <div className="button-container">
                  <Link to={"/"}>
                    <button className="back-button">Back</button>
                  </Link>
                </div>
                <img src={flags.png} alt="" />
              </div>
              <div className="country-info__text">
                <div className="country-info__text-container">
                  <div className="country-text">
                    <div className="name">
                      <h2>{name.common}</h2>
                    </div>
                    <div className="info">
                      <p>
                        <b>Official Name: </b>
                        {name.official}
                      </p>
                      <p>
                        <b>Population: </b>
                        {population}
                      </p>
                      <p>
                        <b>Region: </b>
                        {region}
                      </p>
                      <p>
                        <b>Sub region: </b>
                        {subregion || "None"}
                      </p>
                      <p>
                        <b>Capital: </b>
                        {capital}
                      </p>
                      <p>
                        <b>Top Level Domain: </b>
                        {tld.map((t) => {
                          return `${t}, `;
                        })}
                      </p>
                      <p>
                        <b>Currencies: </b>
                        {curren.map((curr) => {
                          return curr;
                        })}
                      </p>
                      <p>
                        <b>Languages: </b>
                        {lang.map((lag) => {
                          return `${lag}, `;
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="country-borders">
                    <p>
                      <b>Border Countries: </b>
                    </p>
                    <div className="border-buttons">
                      {borders
                        ? borders.map((border, index) => {
                            return (
                              <Link to={`/country/${border}`}>
                                <button key={index}>{border}</button>
                              </Link>
                            );
                          })
                        : "None"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Country;
