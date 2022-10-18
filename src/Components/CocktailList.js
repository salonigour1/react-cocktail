import React from "react";
import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import "./myStyle.css";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  // console.log(cocktails);
  console.log(loading);
  if (loading) {
    return <Loading />;
  }
  // if (cocktails.length < 1) {
  //   return <div>coctail not found</div>;
  // }
  return (
    <div className="container">
      {cocktails.map((cocktail) => {
        return (
          <div className="card" key={cocktail.id}>
            <img src={cocktail.image} />
            <div className="card_info">
              <h1>{cocktail.name}</h1>
              <p className="glass">{cocktail.glass}</p>
              <p className="info">{cocktail.info}</p>
              <Link to={`/cocktail/${cocktail.id}`} className="detail_btn">
                Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CocktailList;
