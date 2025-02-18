import React from "react";
import animationData from "./data.json";
import Lottie from "react-lottie";

export const InitialLoader = React.memo(() => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="bg-[#3C42C7] w-full h-screen flex justify-center items-center fixed top-0 left-0 z-[9999]">
      <Lottie options={defaultOptions} height={250} width={250} />
    </section>
  );
});

