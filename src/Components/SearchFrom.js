import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

function SearchFrom() {
  const { setSearchItem } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchItem(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchValue.current.value = "";
  };
  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="search-label">
          {" "}
          Search your favorite cocktails
        </label>
        <br />
        <input
          type="text"
          id="name"
          ref={searchValue}
          onChange={searchCocktail}
          placeholder="Enter cocktail name..."
        ></input>
      </form>
    </section>
  );
}

export default SearchFrom;
