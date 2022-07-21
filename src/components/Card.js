import React from "react";

const Card = ({ props }) => {
  return (
    <div className="card">
      <img src={props.flags.png} alt="" />
      <div className="coutry-info">
        <h3>{props.name.common}</h3>
        <p>Population: {props.population}</p>
        <p>Region: {props.region}</p>
        <p>Capital: {props.capital}</p>
      </div>
    </div>
  );
};

export default Card;
