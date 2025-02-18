import { IRating } from "../../../../../types/product";
import { ProductCardProps } from "./types";


/**
 * ProductDetails component displays product information including title, rating, and price.
 */
export const ProductDetails = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-lg font-semibold mb-2 text-gray-900 text-center">
        {product.title}
      </h2>
      <ProductRating rating={product.rating} />
      <ProductPrice price={product.price} />
    </div>
  );
}

/**
 * ProductRating component displays the product's star rating.
 */
const ProductRating = ({ rating }: { rating: IRating }) => {
  return (
    <div className="flex items-center mb-4">
      <span className="text-yellow-500 text-2xl">
        {"★".repeat(Math.floor(rating?.rate))}
        {"☆".repeat(5 - Math.floor(rating?.rate))}
      </span>
      <span className="text-red-300">({rating?.count})</span>
    </div>
  );
}

/**
 * ProductPrice component displays the product's price with a discount.
 */
const ProductPrice = ({ price }: { price: number }) => {
  const discountedPrice = (price - price / 10).toFixed(2);
  return (
    <div className="flex justify-center items-center gap-2 mb-4">
      <p className="text-sm text-red-600 line-through">AED {discountedPrice}</p>
      <p className="font-bold text-lg text-gray-900">AED {price.toFixed(2)}</p>
    </div>
  );
}
