import React from "react";

const Card = ({ props }) => {
  const { capital, region, population, name, flags } = props;
  return (
    <div className="card">
      <img src={flags.png} alt="" />
      <div className="country-info">
        <h3>{name.common}</h3>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
