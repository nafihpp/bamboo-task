import { useEffect, Suspense, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { initiateNprogress } from "./utils/custom-utils";
import "nprogress/nprogress.css";
import routes from "./routes";
import Footer from "./components/common/footer";
import { NavbarHeader } from "./components/common/navbar";
import { InitialLoader } from "./components/common/loaders/initial-loader";

function App() {
  const [inititalLoader, setInititalLoader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    initiateNprogress();
  }, [location.pathname]);

  /** Simulate Delay to Show Animation on Initial Load */
  setTimeout(() => {
    setInititalLoader(false);
  }, 1000);

  if (inititalLoader) {
    return <InitialLoader />;
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Suspense fallback={<h1>Loading...</h1>}>
        <NavbarHeader />
        <main className="flex-grow">
          <Routes>
            {routes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;
