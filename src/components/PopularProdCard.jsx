import { star } from "../assets/icons";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useProduct } from "../contexts/ProductsContexts";
import { useState } from "react";

function PopularProdCard({ imgURL, name, price, imgRounded = false }) {
  const { addToLike, deleteFromLike, likeProds } = useProduct();
  const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <div
      className="flex flex-1 flex-col w-full "
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <img
        src={imgURL}
        alt={name}
        className={`${imgRounded ? "rounded-lg" : ""}`}
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" height={24} width={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3
        className={`mt-2 text-2xl leading-normal font-semibold font-palanquin ${
          mouseEnter ? "underline-offset-1 underline" : ""
        } `}
      >
        {name}
      </h3>
      <div className="flex justify-between  h-full mt-2 ">
        <p className="  font-semibold font-montserrat text-coral-red text-2xl leading-normal">
          {price}
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            likeProds.map((el) => el.imgURL).includes(imgURL)
              ? deleteFromLike(imgURL)
              : addToLike({ imgURL, name, price });
          }}
        >
          {likeProds.map((el) => el.imgURL).includes(imgURL) ? (
            <AiFillHeart
              className="mr-2 cursor-pointer text-coral-red ease-in duration-200"
              size={"25"}
            />
          ) : (
            <AiOutlineHeart className="mr-2 cursor-pointer " size={"25"} />
          )}
        </button>
      </div>
    </div>
  );
}

export default PopularProdCard;
