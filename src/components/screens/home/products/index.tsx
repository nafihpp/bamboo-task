import { useState } from "react";
import { useCategory } from "../../../../context/categories";
import useFetch from "../../../../hooks/useFetch";
import { ProductsEndpoints } from "../../../../modules/endpoints";
import { ProductCatalog } from "../../../../types/product";
import { categoryFilter, searchProducts } from "../../../../utils/custom-utils";
import ProductCard from "./card";
import useDebounce from "../../../../hooks/useDebounce";
import { SearchComponent } from "../search";

/**
 * ProductList component
 * Fetches and displays the list of products
 */
export default function ProductList() {
  const { error, data, isLoading } = useFetch<ProductCatalog>(
    ProductsEndpoints.BASE
  );
  const [searchQuery, setSearchQuery] = useState("");

  //delay of 1000ms for debouncing.
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  const { category } = useCategory();

  if (isLoading) return <p className="text-center">Loading products...</p>;

  if (error)
    return (
      <p className="text-center text-red-500">
        Error loading products: {error}
      </p>
    );
  if (!data || data?.length === 0)
    return <p className="text-center">No products available</p>;

  const filteredByCategory =
    category !== "All" ? categoryFilter(data, category) : data;

  const filteredAndSearched = searchProducts(
    filteredByCategory,
    debouncedSearchQuery
  );

  return (
    <section>
      {/* Search input */}
      <SearchComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ul className="!pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 auto-rows-fr">
        {filteredAndSearched?.map((product) => (
          <ProductCard product={product} />
        ))}
      </ul>
    </section>
  );
}
