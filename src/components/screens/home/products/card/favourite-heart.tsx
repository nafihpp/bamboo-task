import { FavouriteIcon, FilledHeartIcon } from "../../../../../assets/icons";

interface FavoriteHeartProps {
  isFavorite: boolean;
  onClick: () => void;
}

/**
 * FavoriteButton component displays a button to toggle favorite status.
 */
export function FavoriteHeart({ isFavorite, onClick }: FavoriteHeartProps) {
  return (
    <section className="flex justify-end">
      {isFavorite ? (
        <FilledHeartIcon className="h-8 w-8 cursor-pointer" onClick={onClick} />
      ) : (
        <FavouriteIcon className="h-8 w-8 cursor-pointer" onClick={onClick} />
      )}
    </section>
  );
}
