import React from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import {
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

function Menu({ open, setOpen, node }) {
  return (
    <div
      open={open}
      ref={node}
      className={` ${
        open ? "translate-x-0" : "translate-x-[120%]"
      } top-0 right-0 fixed  z-30 text-3xl flex flex-col  duration-500 ease-in-out transition-all  font-palanquin shadow-xl dark:shadow-coral-red bg-white dark:bg-black h-screen `}
    >
      <div onClick={() => setOpen(false)} className="w-full flex justify-end">
        <p className="p-4">&times;</p>
      </div>
      <ul className=" pt-5 flex flex-col gap-3 p-10 ">
        <li className="flex items-center gap-1 text-black dark:text-white">
          <AiOutlineUser />
          Welcome Dear
        </li>
        {navLinks.map((el) => (
          <Link
            onClick={() => setOpen(false)}
            key={el.label}
            to={`/niketail/${el.href}`}
          >
            <li className=" text-black dark:text-white ">{el.label}</li>
          </Link>
        ))}
        <div className="pt-5 flex flex-col gap-3 ">
          <Link to={"/niketail/favorites"} onClick={() => setOpen(false)}>
            <li className=" flex items-center gap-1 text-black dark:text-white">
              <AiFillHeart className="color: text-coral-red" />
              Favorites
            </li>
          </Link>
          <Link to="/niketail/cart" onClick={() => setOpen(false)}>
            <li className=" flex items-center gap-1 text-black dark:text-white">
              <AiOutlineShoppingCart />
              Bag
            </li>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Menu;
