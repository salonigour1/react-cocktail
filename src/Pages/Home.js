import React from "react";
import SearchFrom from "../Components/SearchFrom";
import CocktailList from "../Components/CocktailList";
import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <main>
      <Navbar />
      <SearchFrom />
      <CocktailList />
    </main>
  );
}

export default Home;
