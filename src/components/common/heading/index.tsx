import type React from "react";

interface HeadingProps {
  title: string;
  icon: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ title, icon }) => (
  <header className="my-4 sm:my-6 md:my-8 !lg:my-10 !mb-10 !mt-5">
    <h1 className="flex items-center justify-center gap-2 text-center px-4">
      <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold break-words">
        {title}
      </p>
      <span>{icon}</span>
    </h1>
  </header>
);
