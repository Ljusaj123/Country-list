import React from "react";

const Card = ({ props }) => {
  const { capital, region, population, name, flags } = props;
  return (
    <div className="card">
      <img src={flags.png} alt="" />
      <div className="country-info">
        <h3>{name.common}</h3>
        <p>
          <b>Population:</b> {population}
        </p>
        <p>
          <b>Region:</b> {region}
        </p>
        <p>
          <b>Capital:</b> {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
