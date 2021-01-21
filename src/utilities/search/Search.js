import React, { useState } from "react";
import CityWreckers from "../../views/pages/homepage/HomepageItem/Citywreckers";
const Search = () => {
  const [searchField, setSearchField] = useState("");
  const [value, setValue] = useState("Auckland");
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(searchField);
    setSearchField("");
  };
  return (
    <>
      <div class="row searchbycity">
        <div className="col-lg-6">
          <h2 class="news-heading">Wreckers By City</h2>
        </div>
        <div className="col-lg-6">
          <div class="search-container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search By City"
                value={searchField}
                name="search"
                onChange={handleChange}
              />
              <button type="submit" class="searchsubmit">
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="row citywrecker">
        <CityWreckers cityList={value} />
      </div>
    </>
  );
};
export default Search;
