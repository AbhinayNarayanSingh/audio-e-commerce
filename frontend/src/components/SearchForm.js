import React from "react";

function SearchForm() {
  return (
    <form action="" method="get">
      <div className="form-search search-form">
        <button>
          <img src="/img/assets/search.svg" alt="" />
        </button>
        <input type="text" placeholder="Search headphone" />
      </div>
    </form>
  );
}

export default SearchForm;
