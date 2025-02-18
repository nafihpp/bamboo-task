import { useCallback, useState } from "react";
import { useFavourites } from "../../../../../context/favourite";
import { isFavouriteProduct } from "../../../../../utils/custom-utils";
import { ProductImage } from "./product-image";
import { FavoriteHeart } from "./favourite-heart";
import { ProductDetails } from "./product-details";
import { ProductCardProps } from "./types";


/**
 * ProductCard component displays a single product with image, favorite heart,rating, and pricing details.
 * @param {ProductCardProps} props - The props for the ProductCard component.
 */
export default function ProductCard({ product }: ProductCardProps) {
  const { favourites, setFavourites } = useFavourites();
  const [loved, setLoved] = useState(false);
  const isFavorite = isFavouriteProduct(product.id, favourites);

  /**
   * Toggles the favorite status of the product.
   */
  const toggleFavorite = useCallback(() => {
    if (isFavorite) {
      setFavourites((prev) => prev.filter((fav) => fav.id !== product.id));
    } else {
      setFavourites((prev) => [...prev, product]);
      setLoved(true);
      setTimeout(() => setLoved(false), 1000);
    }
  }, [isFavorite, product, setFavourites]);

  return (
    <li className="bg-white rounded-xl border border-gray-300 max-h-[480px] !p-4 transition-transform hover:scale-[1.02]">
      <ProductImage
        product={product}
        loved={loved}
        onDoubleTap={toggleFavorite}
      />
      <FavoriteHeart isFavorite={isFavorite} onClick={toggleFavorite} />
      <ProductDetails product={product} />
    </li>
  );
}
