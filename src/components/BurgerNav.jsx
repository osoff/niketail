import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";

function BurgerNav({ setOpenMenu }) {
  return (
    <ul>
      {navLinks.map((el) => (
        <Link key={el.label} to={el.href} onClick={() => setOpenMenu(false)}>
          <li className=" font-palanquin">{el.label}</li>
        </Link>
      ))}
      <Link to={"/favorites"} onClick={() => setOpenMenu(false)}>
        <li className=" flex items-center gap-1">
          <AiFillHeart className="color: text-coral-red" />
          Favorites
        </li>
      </Link>
      <Link to="cart" onClick={() => setOpenMenu(false)}>
        <li className=" flex items-center gap-1">
          <AiOutlineShoppingCart />
          Bag
        </li>
      </Link>
    </ul>
  );
}
export default BurgerNav;
