import React, { createContext, useContext, useState } from "react";

const defaultValues = {
  favouritesList: [],
  addFavourite: (id) => {},
  deleteFavourite: (id) => {},
  checkFavouriteOnTheList: (id) => boolean,
};

export const FavouritesContext = createContext(defaultValues);

export function useFavourites() {
  return useContext(FavouritesContext);
}

const FavouritesContextProvider = ({ children }) => {
  const [favouritesList, setFavouritesList] = useState([]);

  console.log("favouritesList", favouritesList);

  const checkFavouriteOnTheList = (id) => {
    return favouritesList.some((fav) => fav === id);
  };

  const addFavourite = (id) => {
    console.log("add", id);
    setFavouritesList((prev) => [...prev, id]);
  };

  const deleteFavourite = (id) => {
    console.log("delete", id);
    const newList = favouritesList.filter((fav) => fav !== id);
    setFavouritesList(newList);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favouritesList,
        addFavourite,
        deleteFavourite,
        checkFavouriteOnTheList,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
