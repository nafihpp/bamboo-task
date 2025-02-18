import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "./nav-links";
import { HamburgerButton } from "./hamburger";

/**
 * NavbarHeader component for the main navigation of the application.
 */
export const NavbarHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  /** Toggle menu open/closed state */
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  /** Close menu (for mobile nav) */
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white text-black border-b flex items-center h-20">
      <div className="!mx-auto w-[90%]">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="https://www.bamboo-card.com/wp-content/uploads/2022/04/bamboo_logo.png"
              alt="Bamboo Logo"
              width={120}
              height={120}
              className="!max-h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <NavLinks />
          </nav>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <nav className="md:hidden absolute top-20 left-0 right-0 bg-white border-b p-4">
              <NavLinks closeMenu={closeMenu} />
            </nav>
          )}

          {/* Hamburger Button */}
          <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};
