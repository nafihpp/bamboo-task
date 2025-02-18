import { FilledHeartIcon } from "../../../assets/icons";
import { useFavourites } from "../../../context/favourite";
import { Heading } from "../../common/heading";
import ProductCard from "../home/products/card";

export default function FavouriteComponent() {
  const { favourites } = useFavourites();

  return (
    <main>
      <div className="wrapper w-[90%] !mx-auto">
        {favourites.length > 0 && (
          <Heading
            title="Double tap on Product or Press the Heart to make it your Favourite Product"
            icon={<FilledHeartIcon className="w-8 h-8 md:w-12 md:h-12" />}
          />
        )}
        {favourites.length === 0 && (
          <p className="text-center text-2xl my-12">No Fovourites Found :/</p>
        )}
        <ul className="!pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 auto-rows-fr">
          {favourites.map((favourite) => (
            <ProductCard key={favourite?.id} product={favourite} />
          ))}
        </ul>
      </div>
    </main>
  );
}
