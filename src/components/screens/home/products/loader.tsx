import { SkeletonLoader } from "../../../common/loaders/skelton";

export default function ProductLoading({ isLoading }: { isLoading: boolean }) {
  return (
    <ul className="!pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 auto-rows-fr">
      {isLoading && (
        <>
          {[...Array(12)].map((_, index) => (
            <li key={index} className="mb-4">
              <SkeletonLoader className="!min-h-[350px] !min-w-[200px]" />
            </li>
          ))}
        </>
      )}
    </ul>
  );
}

