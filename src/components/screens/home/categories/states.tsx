export const ErrorState = ({ error }: { error: string }) => (
  <p className="text-center text-red-500 py-4">
    Error loading categories: {error}
  </p>
);

export const EmptyState = () => (
  <p className="text-center text-gray-500 py-4">No categories available</p>
);
