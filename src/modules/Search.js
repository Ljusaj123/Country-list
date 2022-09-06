import { regionList } from "../const/RegionList.js";

function Search({ setUrl }) {
  const handleClick = (value) => {
    setUrl(`https://restcountries.com/v3.1/region/${value}?fullText=true`);
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
      <div className="search-filter__container container">
        <input
          type="text"
          className="search__input"
          placeholder="Search for a country..."
          onChange={(e) => handleInput(e.target.value)}
        />
        <select
          name="format"
          id="format"
          className="search-filter__select"
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
  );
}

export default Search;
