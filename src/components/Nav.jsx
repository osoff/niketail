import { Link } from "react-router-dom";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useProduct } from "../contexts/ProductsContexts";
function Nav() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const { cardProds } = useProduct();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowNavBar((prevShowNavBar) => {
        if (currentScrollY > prevScrollY && currentScrollY > 0) {
          // Прокрутка вниз - скрываем панель навигации
          return false;
        } else {
          // Прокрутка вверх или в начало страницы - показываем панель навигации
          return true;
        }
      });

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
  return (
    <header
      className={`padding-x py-8  z-20 w-full fixed  dark:bg-black bg-white bg-opacity-90 dark:bg-opacity-70 ${
        showNavBar ? "top-0" : "-top-16"
      } ease-in duration-200`}
    >
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((el) => (
            <li key={el.label}>
              <Link
                to={el.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red ease-in-out duration-200"
              >
                {el.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="max-lg:hidden flex gap-5 mr-5 text-2xl">
          <div
            title="Favourites"
            className="flex justify-center items-center hover:bg-white rounded-full h-10 w-10 ease-in-out duration-100 cursor-pointer"
          >
            <Link to={"favorites"}>
              <AiFillHeart className="color: text-coral-red" />
            </Link>
          </div>
          <div
            title="Bag"
            className="flex justify-center items-center hover:bg-white rounded-full h-10 w-10 ease-in-out duration-100 cursor-pointer dark:text-white dark:hover:text-black"
          >
            <Link to="cart">
              <div className="relative">
                <AiOutlineShoppingCart />
                {cardProds.length > 0 && (
                  <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold text-white bg-coral-red border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                    {cardProds.length}
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
        <div className="hidden max-lg:flex max-lg:content-end">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="order-1"
          />
          <div className=" flex gap-3 mr-5 text-2xl">
            <div
              to={"favorites"}
              title="Favourites"
              className="flex justify-center items-center hover:bg-white rounded-full h-10 w-10 ease-in-out duration-100 cursor-pointer"
            >
              <Link to={"favorites"}>
                <AiFillHeart className="color: text-coral-red" />
              </Link>
            </div>
            <div
              title="Bag"
              className="flex justify-center items-center hover:bg-white rounded-full h-10 w-10 ease-in-out duration-100 cursor-pointer"
            >
              <Link to="cart">
                <div className="relative inline-flex items-center">
                  <AiOutlineShoppingCart />
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                    20
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
