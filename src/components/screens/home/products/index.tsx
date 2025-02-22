import { useState } from "react";
import { useCategory } from "../../../../context/categories";
import { ProductsEndpoints } from "../../../../modules/endpoints";
import { ProductCatalog } from "../../../../types/product";
import { categoryFilter, searchProducts } from "../../../../utils/custom-utils";
import { SearchComponent } from "../search";
import { ErrorState } from "../../../common/error-state";
import useFetch from "../../../../hooks/useFetch";
import ProductCard from "./card";
import useDebounce from "../../../../hooks/useDebounce";
import ProductLoading from "./loader";

/**
 * ProductList component
 * Fetches and displays the list of products
 */
export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState("");
  const { error, data, isLoading } = useFetch<ProductCatalog>(
    ProductsEndpoints.BASE
  );
  const { category } = useCategory();

  // Delay of 1000ms for debouncing
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  if (isLoading) return <ProductLoading isLoading={isLoading} />;

  if (!data || (data?.length === 0 && !isLoading))
      return <ErrorState error="No products available" />;

  if (error) return <ErrorState error="No products available" />;

  const filteredByCategory = category !== "All" ? categoryFilter(data, category) : data;

  const filteredAndSearched = searchProducts(filteredByCategory,debouncedSearchQuery);

  return (
    <section>
      <SearchComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ul className="!pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 auto-rows-fr">
        {/* Show products once loaded */}
        {!isLoading &&
          filteredAndSearched?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </section>
  );
}
