import nProgress from "nprogress";
import { IProduct } from "../types/product";

/** Search the Product list based on the search string (case insensitive) */
export const searchProducts = (products: IProduct[], search: string): IProduct[] => {
  return products.filter((product) =>
    product?.title?.toLowerCase().includes(search.toLowerCase())
  );
};

/** Checks if the current Product is in the favourites list* */
export const isFavouriteProduct = (id: number, favourites: IProduct[]) => {
  const isFavour = favourites.some((favourite) => favourite?.id === id);
  return isFavour;
};

/** Category Filters the Product list based on the category string (case insensitive) */
export const categoryFilter = (products: IProduct[], category: string): IProduct[] => {
  return products.filter((product) =>product?.category?.toLowerCase() === category.toLocaleLowerCase())
};

/**
 * Initiates the progress bar using nProgress.
 */
export const initiateNprogress = () =>{
  nProgress.start();
  nProgress.done();
}
