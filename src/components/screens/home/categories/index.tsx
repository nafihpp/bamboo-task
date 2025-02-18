import { useCategory } from "../../../../context/categories";
import useFetch from "../../../../hooks/useFetch";
import { ProductsEndpoints } from "../../../../modules/endpoints";
import type { ProductCatalog } from "../../../../types/product";
import { CategoryTab } from "./tabs";

/**
 * CategoryListing component
 * Fetches and displays the list of Categories for filtering as responsive tabs
 */
export default function CategoryListing() {
  const { data: categories, error, isLoading } = useFetch<ProductCatalog>(ProductsEndpoints.CATEGORIES);
  const { setCategory, category } = useCategory();

  /** TODO: add skelton loader here */
  if (isLoading) return <div>loading</div>;
  if (error) return <ErrorState error={error} />;
  if (!categories || categories.length === 0) return <EmptyState />;

  const categoryList = ["All", ...categories];

  return (
    <nav className=" !pb-2 !mb-6">
      <ul className="flex gap-4 justify-center flex-wrap">
        {categoryList.map((categoryName) => (
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

const ErrorState = ({ error }: { error: string }) => (
  <p className="text-center text-red-500 py-4">
    Error loading categories: {error}
  </p>
);

const EmptyState = () => (
  <p className="text-center text-gray-500 py-4">No categories available</p>
);
