import { LovedIcon } from "../../../assets/icons";

export default function FavouriteComponent() {
  return (
    <section className="flex flex-col gap-1 items-center justify-center !my-12">
      <LovedIcon />
      <p className="text-center text-2xl">
        No Favourites Found, Go to Products and yaay!
      </p>
    </section>
  );
}
