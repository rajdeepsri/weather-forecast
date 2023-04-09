import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ placeholder, searchbutton, submitButton }) => {
  return (
    <div className="searchInput">
      {searchbutton && (
        <p>
          <BsSearch />
        </p>
      )}
      <input type="text" placeholder={placeholder} />
      {submitButton && <button className="farmerSearch">Submit</button>}
    </div>
  );
};

export default SearchInput;
