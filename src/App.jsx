import Nav from "./components/Nav";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { useEffect, useRef, useState } from "react";
import MainPage from "./pages/MainPage";
import { ProductsProviders } from "./contexts/ProductsContexts";
import DarkMode from "./components/DarkMode";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Footer from "./sections/Footer";
import Card from "./pages/Card";
import Products from "./pages/Products";
import ProductElement from "./pages/ProductElement";
import useOnClickOutside from "./hooks/useClickMouse";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  const [isDark, setIsDark] = useLocalStorage(false, "darkmode");
  const [openMenu, setOpenMenu] = useState(false);
  const node = useRef();
  const node1 = useRef();
  useOnClickOutside([node, node1], () => setOpenMenu(false));

  useEffect(
    function () {
      if (isDark) {
        document.documentElement.classList.add("dark");
        document.body.style.background = "black";
      } else {
        document.documentElement.classList.remove("dark");
        document.body.style.background = "white";
      }
    },
    [isDark]
  );
  return (
    <ProductsProviders>
      <BrowserRouter>
        <main
          className={`relative dark:bg-black transition-colors ease-in duration-200 `}
        >
          <Nav node={node} setOpenMenu={setOpenMenu} openMenu={openMenu} />
          <div className={`${openMenu && "blur-md duration-500"}`}>
            <Routes>
              <Route path="/niketail/" element={<MainPage />} />
              <Route path="/niketail/favorites" element={<Favorites />} />
              <Route path="/niketail/products" element={<Products />} />
              <Route
                path="/niketail/products/:id"
                element={<ProductElement />}
              />
              <Route path="/niketail/cart" element={<Card />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <section className="bg-black padding-x padding-t pb-8">
              <Footer />
            </section>
          </div>
        </main>
        <DarkMode node={node1} setIsDark={setIsDark} isDark={isDark} />
      </BrowserRouter>
    </ProductsProviders>
  );
}
