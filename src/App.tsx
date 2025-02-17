import { useEffect, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { initiateNprogress } from "./utils/custom-utils";
import "nprogress/nprogress.css";
import routes from "./routes";
import Footer from "./components/common/footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    initiateNprogress();
  }, [location.pathname]);

  return (
    <Suspense fallback={<div className="loadingStyles">Loading...</div>}>
      <header>hi</header>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
