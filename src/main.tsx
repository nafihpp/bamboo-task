import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import "./styles/fonts.css";
import { CategoryProvider } from "./context/categories";
import { FavouritesProvider } from "./context/favourite";

const rootElement = document.getElementById("root") as HTMLElement;

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <FavouritesProvider>
          <App />
        </FavouritesProvider>
      </CategoryProvider>
    </BrowserRouter>
  </StrictMode>
);
