import { createContext,useState } from "react";
export const FavoritesContext = createContext({
  favoriteMealIDs: [],
  addFavorites: (id) => {},
  removeFavorite: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
  const [favoriteMealIDs, setFavoriteMealIDs ] = useState([]);

  const addFavorites = (id) => {
    setFavoriteMealIDs((currentIds) => [...currentIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealIDs((currentIds) =>
      currentIds.filter((mealId) => mealId !== id)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteMealIDs: favoriteMealIDs,
        addFavorites: addFavorites,
        removeFavorite: removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoriteContextProvider;
