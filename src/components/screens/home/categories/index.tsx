import useFetch from "../../../../hooks/useFetch";
import { useCategory } from "../../../../context/categories";
import { CategoryTab } from "./tabs";
import { ProductsEndpoints } from "../../../../modules/endpoints";
import type { ProductCatalog } from "../../../../types/product";
import { EmptyState, ErrorState } from "./states";
import CategoryLoading from "./loader";

/**
 * CategoryListing component
 * Fetches and displays the list of Categories for filtering as responsive tabs
 */
export default function CategoryListing() {
  const { data: categories, error,isLoading} = useFetch<ProductCatalog>(ProductsEndpoints.CATEGORIES);
  const { setCategory, category } = useCategory();

  if (isLoading) return <CategoryLoading isLoading={isLoading} />;
  if (error) return <ErrorState error={error} />;
  if (!categories || categories.length === 0) return <EmptyState />;


  const categoryList = ["All", ...categories];

  return (
    <nav className=" !pb-2 !mb-6">
      <ul className="flex gap-2 justify-center flex-wrap">
        {!isLoading &&
          categoryList.map((categoryName) => (
            <CategoryTab
              key={String(categoryName)}
              name={String(categoryName)}
              isActive={category === categoryName}
              onClick={() => setCategory(String(categoryName))}
            />
          ))}
      </ul>
    </nav>
  );
}
