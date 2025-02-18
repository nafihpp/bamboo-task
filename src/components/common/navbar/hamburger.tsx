interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

/**
 * HamburgerButton component for toggling mobile menu.
 */
export const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => (
  <button
    className="md:hidden cursor-pointer flex gap-2 flex-col justify-center items-center w-10 h-10"
    onClick={onClick}
    
    aria-label="Toggle menu"
    aria-expanded={isOpen}
  >
    <span
      className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
        isOpen ? "rotate-45 translate-y-2" : ""
      }`}
    />
    <span
      className={`w-6 h-0.5 bg-black my-1 transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-0" : ""
      }`}
    />
    <span
      className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
        isOpen ? "-rotate-45 -translate-y-2" : ""
      }`}
    />
  </button>
);
