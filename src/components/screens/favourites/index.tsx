import { FilledHeartIcon } from "../../../assets/icons";
import { useFavourites } from "../../../context/favourite";
import { Heading } from "../../common/heading";
import ProductCard from "../home/products/card";

export default function FavouriteComponent() {
  const { favourites } = useFavourites();
  
  return (
    <main>
      <div className="w-[90%] !mx-auto">
        <header>
          <Heading
            title="Double tap on Product or Press the Heart to make it your Favourite Product"
            icon={<FilledHeartIcon className="w-8 h-8 md:w-12 md:h-12" />}
          />
        </header>
        <ul className="flex flex-wrap gap-8 w-full">
          {favourites.map((favourite) => (
            <ProductCard key={favourite?.id} product={favourite} />
          ))}
        </ul>
      </div>
    </main>
  );
}
