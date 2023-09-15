import { Link } from "react-router-dom";
import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillHeart, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useProduct } from "../contexts/ProductsContexts";
function Nav({ setOpenMenu }) {
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
      className={`padding-x py-8  z-20 w-full fixed  dark:bg-black bg-white bg-opacity-90 dark:bg-opacity-70 dark:text-white ${
        showNavBar ? "top-0" : "-top-16"
      }  ease-in duration-200`}
    >
      <nav className="flex  justify-between items-center max-container transition ease-in duration-200">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((el) => (
            <Link
              key={el.label}
              to={el.href}
              className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red ease-in-out duration-200"
            >
              <li>{el.label}</li>
            </Link>
          ))}
        </ul>
        <div className="max-lg:justify-start items-center flex gap-5  text-2xl">
          <Link to={"favorites"}>
            <div
              title="Favourites"
              className="flex justify-center items-center hover:bg-white rounded-full h-10 w-10 ease-in-out duration-100 cursor-pointer"
            >
              <AiFillHeart className="color: text-coral-red" />
            </div>
          </Link>
          <Link to="cart">
            <div
              title="Bag"
              className="flex justify-center items-center hover:bg-white rounded-full h-10 w-10 ease-in-out duration-100 cursor-pointer dark:text-white dark:hover:text-black"
            >
              <div className="relative">
                <AiOutlineShoppingCart />
                {cardProds.length > 0 && (
                  <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold text-white bg-coral-red border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                    {cardProds.length}
                  </div>
                )}
              </div>
            </div>
          </Link>
          <div
            onClick={() => setOpenMenu(true)}
            className="hidden max-lg:flex  max-lg:content-end justify-center items-center hover:bg-white rounded-full h-10 w-10 ease-in-out duration-100 cursor-pointer"
          >
            <AiOutlineMenu className="order-1 h-[24px] w-[24px]" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
