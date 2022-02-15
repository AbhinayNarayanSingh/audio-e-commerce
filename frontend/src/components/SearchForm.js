import React, { useState } from "react";

function SearchForm() {
  const [input, setInput] = useState("");
  const submitHandler = () => {
    console.log(input);
  };

  return (
    <form>
      <div className="form-search search-form">
        <img
          src="/img/assets/search.svg"
          alt="search-button"
          onClick={submitHandler}
        />

        <input
          type="text"
          placeholder="Search headphone"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </form>
  );
}

export default SearchForm;
