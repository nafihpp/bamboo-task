import { Link, useLocation } from "react-router-dom";
import { useFavourites } from "../../../context/favourite";
import routes from "../../../routes";

interface NavLinksProps {
  closeMenu?: () => void;
}

/**
 * NavLinks component containing navigation links with active state highlighting.
 */
export const NavLinks = ({ closeMenu }: NavLinksProps) => {
  const { favourites } = useFavourites();
  const location = useLocation();

  return (
    <nav className="flex flex-col gap-4 sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
      {routes.map((route) => {
        if (route.path === "*") return null;
        const isActive = location.pathname === route.path;
        const favoriteCount = favourites?.length || 0;

        return (
          <Link
            key={route.path}
            to={route.path}
            className={` !px-3 !py-2 rounded-none md:rounded-md transition-colors ${
              isActive
                ? "bg-[#3C42C7] text-white"
                : "bg-white hover:bg-gray-100 text-black"
            }`}
            onClick={closeMenu}
          >
            <span className="flex items-center">
              <p className="relative">
                {route.title}
                {favoriteCount > 0 && route.title === "Favourites" && (
                  <span className="!ml-2 bg-[#5C62E3] text-white !rounded-full w-6 flex items-center justify-center !h-6 text-xs absolute bottom-3 -right-6 md:-top-6 md:-right-5">
                    {favoriteCount}
                  </span>
                )}
              </p>
            </span>
          </Link>
        );
      })}
    </nav>
  );
};
