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
            className={`relative !px-3 !py-2 rounded-md transition-colors ${
              isActive
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-100 text-black"
            }`}
            onClick={closeMenu}
          >
            <span className="flex items-center">
              {route.title}
              {favoriteCount > 0 && route.title === "Favourites" && (
                <span className="!ml-2 bg-green-500 text-white !rounded-full !px-2 !py-1.5 text-xs absolute -top-2 -right-2">
                  {favoriteCount}
                </span>
              )}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};
