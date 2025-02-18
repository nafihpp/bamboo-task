interface CategoryTabProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

export const CategoryTab = ({ name, isActive, onClick }: CategoryTabProps) => (
  <li>
    <button
      onClick={onClick}
      className={`
          !min-w-[80px] !cursor-pointer !px-4 !py-2 text-sm md:text-base font-medium !rounded-lg whitespace-nowrap"
          ${
            isActive
              ? "bg-[#3C42C7] text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }
        `}
    >
      {name.toUpperCase()}
    </button>
  </li>
);
