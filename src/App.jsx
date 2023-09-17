import Nav from "./components/Nav";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import { ProductsProviders } from "./contexts/ProductsContexts";
import DarkMode from "./components/DarkMode";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Footer from "./sections/Footer";
import Card from "./pages/Card";
import Products from "./pages/Products";
import ProductElement from "./pages/ProductElement";
import BurgerNav from "./components/BurgerNav";
import { AiOutlineUser } from "react-icons/ai";
export default function App() {
  const [isDark, setIsDark] = useLocalStorage(false, "darkmode");
  const [openMenu, setOpenMenu] = useState(false);

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
        {openMenu && (
          <div className="  text-2xl z-30 fixed top-0  right-0 bottom-0 flex flex-col bg-white dark:bg-black shadow-lg items-center duration-150 dark:text-white dark:shadow-coral-red ">
            <div
              className="flex justify-end w-full px-3"
              onClick={() => setOpenMenu(false)}
            >
              <p>&times;</p>
            </div>
            <div className="p-10 pr-28">
              <div className="flex items-center gap-1">
                <AiOutlineUser />
                <h2 className=" font-bold">Hi Dear</h2>
              </div>
              <BurgerNav setOpenMenu={setOpenMenu} />
            </div>
          </div>
        )}
        <main
          className={`relative dark:bg-black transition-colors ease-in duration-200 ${
            openMenu && "blur-md"
          }`}
        >
          <Nav setOpenMenu={setOpenMenu} />
          <Routes>
            <Route path="/niketail/" element={<MainPage />} />
            <Route path="/niketail/favorites" element={<Favorites />} />
            <Route path="/niketail/products" element={<Products />} />
            <Route path="/niketail/products/:id" element={<ProductElement />} />
            <Route path="/niketail/cart" element={<Card />} />
          </Routes>
          <section className="bg-black padding-x padding-t pb-8">
            <Footer />
          </section>
        </main>
        <DarkMode setIsDark={setIsDark} isDark={isDark} />
      </BrowserRouter>
    </ProductsProviders>
  );
}
