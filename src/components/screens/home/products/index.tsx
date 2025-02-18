import { useState } from "react";
import { useCategory } from "../../../../context/categories";
import { ProductsEndpoints } from "../../../../modules/endpoints";
import { ProductCatalog } from "../../../../types/product";
import { categoryFilter, searchProducts } from "../../../../utils/custom-utils";
import { SearchComponent } from "../search";
import { SkeletonLoader } from "../../../common/loaders/skelton";
import useFetch from "../../../../hooks/useFetch";
import ProductCard from "./card";
import useDebounce from "../../../../hooks/useDebounce";


/**
 * ProductList component
 * Fetches and displays the list of products
 */
export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState("");
  const { error, data, isLoading } = useFetch<ProductCatalog>(ProductsEndpoints.BASE);
  const { category } = useCategory();

  // Delay of 1000ms for debouncing
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);


  if (!data || (data?.length === 0 && !isLoading))
    return <p className="text-center text-2xl">No products available</p>;

  if (error)
    return (
      <p className="text-center text-red-500">
        Error loading products: {error}
      </p>
    );

  const filteredByCategory = category !== "All" ? categoryFilter(data, category) : data;

  const filteredAndSearched = searchProducts(filteredByCategory,debouncedSearchQuery);

  return (
    <section>
      <SearchComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ul className="!pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 auto-rows-fr">
        {/* Show skeleton loaders when loading */}
        {isLoading && (
          <li  className="mb-4">
            <SkeletonLoader className="!min-h-[350px] !min-w-[200px]" />
          </li>
        )}
        {/* Show products once loaded */}
        {!isLoading &&
          filteredAndSearched?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </section>
  );
}
