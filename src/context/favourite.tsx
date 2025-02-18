import React, { createContext, useState, ReactNode, Dispatch, SetStateAction, useContext } from 'react';
import { IProduct } from '../types/product';

interface FavouriteContextType {
  favourites: IProduct[]; 
  setFavourites: Dispatch<SetStateAction<IProduct[]>>;
}

export const FavouriteContext = createContext<FavouriteContextType | undefined>(undefined);

interface FavouritesProviderProps {
  children: ReactNode; 
}

export const FavouritesProvider: React.FC<FavouritesProviderProps> = ({ children }) => {
  const [favourites, setFavourites] = useState<IProduct[]>([]); 

  return (
    <FavouriteContext.Provider value={{ favourites, setFavourites }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouriteContext);
  if (context === undefined) {
    throw new Error("useFavourite must be used within a FavouritesProvider");
  }
  return context;
};