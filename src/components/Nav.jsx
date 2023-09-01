import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((el) => (
            <li key={el.label}>
              <a
                href={el.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red ease-in-out duration-200"
              >
                {el.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:hidden flex gap-5 mr-5 text-2xl">
          <div className="flex justify-center items-center hover:bg-white rounded-full h-10 w-10 ease-in-out duration-100 cursor-pointer">
            <FcLike className="" />
          </div>
          <div className="flex justify-center items-center hover:bg-white rounded-full h-10 w-10 ease-in-out duration-100 cursor-pointer dark:text-white dark:hover:text-black">
            <AiOutlineShoppingCart />
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
            <div className="flex justify-center items-center hover:bg-white rounded-full h-10 w-10 ease-in-out duration-100 cursor-pointer">
              <FcLike className="" />
            </div>
            <div className="flex justify-center items-center hover:bg-white rounded-full h-10 w-10 ease-in-out duration-100 cursor-pointer">
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
