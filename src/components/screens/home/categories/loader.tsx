import { SkeletonLoader } from "../../../common/loaders/skelton";

export default function CategoryLoading({ isLoading }: { isLoading: boolean }) {
  return (
    <ul className="flex gap-2 justify-center flex-wrap !mb-10">
      {/* Show SkeletonLoader if still loading */}
      {isLoading && (
        <>
          {[...Array(4)].map((_, index) => (
            <li key={index} className="mb-4">
              <SkeletonLoader className="!h-[39px] !min-w-[100px]" />
            </li>
          ))}
        </>
      )}
    </ul>
  );
}
