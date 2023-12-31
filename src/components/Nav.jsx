import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillHeart, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useProduct } from "../contexts/ProductsContexts";
import Menu from "./Menu";
function Nav({ node, openMenu, setOpenMenu }) {
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
      className={`padding-x py-7  z-20 w-full fixed  dark:bg-black bg-white bg-opacity-90 dark:bg-opacity-70 dark:text-white ${
        showNavBar ? "top-0" : "-top-16"
      } transition-all ease-in-out duration-500  `}
    >
      <nav className="flex  justify-between items-center max-container ">
        <Link to="/niketail/">
          <h1 className=" text-coral-red font-bold text-2xl font-palanquin">
            <span className=" italic">OsOff /</span> Shop
          </h1>
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((el) => (
            <Link
              key={el.label}
              to={`/niketail/${el.href}`}
              className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red "
            >
              <li>{el.label}</li>
            </Link>
          ))}
        </ul>
        <div className="max-lg:justify-start items-center flex gap-5  text-2xl">
          <Link to={"/niketail/favorites"}>
            <div
              title="Favourites"
              className="flex justify-center items-center hover:bg-white rounded-full h-10 w-10 cursor-pointer"
            >
              <AiFillHeart className="color: text-coral-red" />
            </div>
          </Link>
          <Link to="/niketail/cart">
            <div
              title="Bag"
              className="flex justify-center items-center hover:bg-white rounded-full h-10 w-10  cursor-pointer dark:text-white dark:hover:text-black"
            >
              <div className="relative">
                <AiOutlineShoppingCart className=" transition-none" />
                {cardProds.length > 0 && (
                  <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold text-white bg-coral-red border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                    {cardProds.length}
                  </div>
                )}
              </div>
            </div>
          </Link>
          <div>
            <div
              onClick={() => setOpenMenu(true)}
              className="hidden max-lg:flex  max-lg:content-end justify-center items-center hover:bg-white rounded-full h-10 w-10  cursor-pointer dark:hover:text-black"
            >
              <AiOutlineMenu className="order-1 h-[24px] w-[24px]" />
            </div>
            <div ref={node}>
              <Menu open={openMenu} setOpen={setOpenMenu} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
