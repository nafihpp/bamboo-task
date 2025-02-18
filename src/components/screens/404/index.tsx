export default function Error404Component() {
  return (
    <section className="h-[calc(100vh-135px)] flex items-center justify-center">
      <div className="text-center flex flex-col gap-4 !p-8 w-full">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">404</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-red-500 mb-4 w-full">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
    </section>
  );
}
