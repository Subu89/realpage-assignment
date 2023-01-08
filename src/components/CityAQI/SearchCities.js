import React, { useState, useEffect, useRef } from "react";
import { useAQIAPIs } from "../../utils/useAQIAPIs";
import { TOKEN, SEARCH_CITIES_BASE_URL } from "../../utils/AQIConst";
import CityAQIList from "./CityAQIList";

const SearchCities = () => {
  const [url, setUrl] = useState("");
  const [cities, loading, intial, error] = useAQIAPIs(url);
  const [searchText, setSearchText] = useState("");
  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  const searchCityName = (event) => {
    event.preventDefault();
    setUrl(`${SEARCH_CITIES_BASE_URL}?token=${TOKEN}&keyword=${searchText}`);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="container fluid">
      <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-8">
          <form className="search" onSubmit={(e) => searchCityName(e)}>
            <i className="bi bi-search"></i>
            <input
              type="text"
              className="form-control"
              ref={searchInput}
              value={searchText}
              placeholder="Enter a City Name"
              onChange={(e) => handleSearchTextChange(e)}
            />
          </form>
        </div>
      </div>

      {loading ? (
        <span>loading...</span>
      ) : (
        !intial && <CityAQIList data={cities.data} />
      )}
    </div>
  );
};

export default SearchCities;
