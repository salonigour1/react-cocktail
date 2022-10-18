import React, { useEffect, useState } from "react";
import "./myStyle.css";
import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";
function Cocktail() {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(`${url}${id}`)
      .then((response) => response.json())
      .then((allData) => {
        const { drinks } = allData;

        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
        } = drinks[0];
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          strIngredient1,
          strIngredient2,
        };

        setDetails(newCocktail);
      });
    setLoading(false);
  }, [id]);

  const {
    name,
    image,
    info,
    category,
    glass,
    instructions,
    strIngredient1,
    strIngredient2,
  } = details;
  if (loading) {
    return <Loading />;
  } else
    return (
      <div className="background">
        <Link to="/" className="go-back">
          Go Back
        </Link>

        <div className="information">
          <img src={image} alt={name} className="image_d"></img>
          <div className="property">
            <span>Name</span>
            <span> {name}</span>
          </div>
          <div className="property">
            <span>Category</span>
            <span> {category}</span>
          </div>
          <div className="property">
            <span>Info</span>
            <span> {info}</span>
          </div>
          <div className="property">
            <span>Glas</span>
            <span> {glass}</span>
          </div>
          <div className="property">
            <span>Instructions</span>
            <span> {instructions}</span>
          </div>
        </div>
      </div>
    );
}

export default Cocktail;
