import Nav from "./components/Nav";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { useEffect } from "react";
import MainPage from "./pages/MainPage";
import { ProductsProviders } from "./contexts/ProductsContexts";
import DarkMode from "./components/DarkMode";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Footer from "./sections/Footer";
import Card from "./pages/Card";
import Products from "./pages/Products";
import ProductElement from "./pages/ProductElement";

export default function App() {
  const [isDark, setIsDark] = useLocalStorage(false, "darkmode");
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
        <main className="relative dark:bg-black">
          <Nav />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductElement />} />
            <Route path="cart" element={<Card />} />
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
