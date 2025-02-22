import { CloseIcon, SearchIcon } from "../../../../assets/icons";
import { SearchComponentProps } from "./types";

export const SearchComponent: React.FC<SearchComponentProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="!my-4 !mb-8 relative">
      <span className="absolute top-3 left-2">
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full !px-4 !py-3 !pl-10 border border-gray-300 bg-white !rounded-xl"
      />
      {searchQuery && (
        <span
          className="cursor-pointer absolute top-2.5 right-2"
          onClick={() => setSearchQuery("")}
        >
          <CloseIcon />
        </span>
      )}
    </section>
  );
};

