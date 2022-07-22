import React from "react";
import { regionList } from "../const/RegionList";
import { useContext } from "react";
import DataContext from "../contexts/DataContext";

function Search() {
  const { setUrl } = useContext(DataContext);

  const handleClick = (value) => {
    setUrl(`https://restcountries.com/v3.1/region/${value}`);
  };

  const handleInput = (query) => {
    if (!query) {
      setUrl("https://restcountries.com/v3.1/all");
    } else {
      setUrl(`https://restcountries.com/v3.1/name/${query}`);
    }
  };
  return (
    <div className="search-filter">
      <div className="search-filter-container">
        <input
          type="text"
          id="input"
          placeholder="Search for a country..."
          onChange={(e) => handleInput(e.target.value)}
        />

        <div className="select">
          <select
            name="format"
            id="format"
            onChange={(e) => handleClick(e.target.value)}
          >
            <option value="DEFAULT" selected disabled>
              Filter by Region
            </option>
            {regionList.map((region, index) => {
              return (
                <option value={region} key={index}>
                  {region}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Search;
