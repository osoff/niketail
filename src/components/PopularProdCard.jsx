import { star } from "../assets/icons";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useProduct } from "../contexts/ProductsContexts";

function PopularProdCard({ imgURL, name, price }) {
  const { addToLike, deleteFromLike, likeProds } = useProduct();

  return (
    <div className="flex flex-1 flex-col w-full ">
      <img src={imgURL} alt={name} />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" height={24} width={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <div className="flex justify-between items-center mt-2">
        <p className="  font-semibold font-montserrat text-coral-red text-2xl leading-normal">
          {price}
        </p>
        <button
          onClick={() =>
            likeProds.map((el) => el.imgURL).includes(imgURL)
              ? deleteFromLike(imgURL)
              : addToLike({ imgURL, name, price })
          }
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
