import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { DoubleBubble } from "react-spinner-animated";
import Header from "../modules/Header";
import "react-spinner-animated/dist/index.css";

function Country({ mode, setMode }) {
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
    <div className="country main-background">
      <Header mode={mode} setMode={setMode} />

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
        const lang = Object.values(languages);

        return (
          <div className="country__info container" key={index}>
            <Link to={"/"}>
              <button className="back-button secondary-background text">
                Back
              </button>
            </Link>
            <div className="country__info-container">
              <div className="country__info-flag">
                <img src={flags.png} alt="" />
              </div>
              <div className="country__info-text">
                <div className="country-text">
                  <h2 className="name">{name.common}</h2>
                  <div className="info">
                    <p>
                      <strong>Official Name: </strong>
                      {name.official}
                    </p>
                    <p>
                      <strong>Population: </strong>
                      {population}
                    </p>
                    <p>
                      <strong>Region: </strong>
                      {region}
                    </p>
                    <p>
                      <strong>Sub region: </strong>
                      {subregion || "None"}
                    </p>
                    <p>
                      <strong>Capital: </strong>
                      {capital}
                    </p>
                    <p>
                      <strong>Top Level Domain: </strong>
                      {tld.map((t) => {
                        return <span>{t}</span>;
                      })}
                    </p>
                    <p>
                      <strong>Currencies: </strong>

                      {curren.map((curr) => {
                        return <span>{curr}</span>;
                      })}
                    </p>
                    <p>
                      <strong>Languages: </strong>
                      {lang.map((lag) => {
                        return <span>{lag}</span>;
                      })}
                    </p>
                  </div>
                </div>
                <div className="country-borders">
                  <p>
                    <b>Border Countries: </b>
                  </p>
                  <div className="border-buttons__container">
                    {borders
                      ? borders.map((border, index) => {
                          return (
                            <Link to={`/countries/${border}`}>
                              <button
                                className="border-button secondary-background text"
                                key={index}
                              >
                                {border}
                              </button>
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
  );
}

export default Country;
