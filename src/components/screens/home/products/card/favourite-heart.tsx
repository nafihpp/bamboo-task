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
    <section onClick={onClick} className="flex justify-end w-full">
      {isFavorite ? (
        <FilledHeartIcon className="h-10 w-10" />
      ) : (
        <FavouriteIcon className="h-10 w-10" />
      )}
    </section>
  );
}
