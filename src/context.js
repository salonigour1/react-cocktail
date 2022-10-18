import React, { useContext, useEffect, useState } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchItem, setSearchItem] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrink = () => {
    setLoading(true);
    try {
      fetch(`${url}${searchItem}`)
        .then((response) => response.json())
        .then((allData) => {
          const { drinks } = allData;

          if (drinks) {
            const newCocktails = drinks.map((item) => {
              const {
                idDrink,
                strDrink,
                strDrinkThumb,
                strAlcoholic,
                strGlass,
              } = item;
              return {
                id: idDrink,
                name: strDrink,
                image: strDrinkThumb,
                info: strAlcoholic,
                glass: strGlass,
              };
            });
            setCocktails(newCocktails);
          } else {
            setCocktails([]);
          }
        });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDrink();
  }, [searchItem]);

  return (
    <AppContext.Provider value={{ loading, cocktails, setSearchItem }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
