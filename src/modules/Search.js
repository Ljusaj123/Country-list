import React from "react";
import { regionList } from "../const/RegionList";

function Search() {
  return (
    <div className="search-filter">
      <div className="search-filter-container">
        <input type="text" id="input" placeholder="Search for a country..." />

        <div className="select">
          <select name="format" id="format">
            <option value="0" selected disabled>
              Filter by Region:
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
