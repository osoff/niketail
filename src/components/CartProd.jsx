import { star } from "../assets/icons";
import { useProduct } from "../contexts/ProductsContexts";
import { AiOutlineDelete, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function CartProd({ id, imgURL, name, price }) {
  const { likeProds, deleteFromCard, addToLike, deleteFromLike } = useProduct();
  return (
    <div className="flex border-b-[1px] py-5 w-full  ">
      <img
        src={imgURL}
        alt={name}
        width={157}
        height={133}
        className=" rounded-lg"
      />
      <div className="w-full ml-3 relative">
        <div className="flex  font-bold justify-between text-xl font-palanquin ">
          <p className=" w-[80%]">{name}</p>
          <p className=" font-montserrat text-coral-red ">{price}</p>
        </div>
        <div className="mt-4 flex justify-start gap-2.5">
          <img src={star} alt="rating" height={24} width={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>
        <div className="absolute bottom-0 flex gap-2 justify-start ">
          {likeProds.map((el) => el.imgURL).includes(imgURL) ? (
            <AiFillHeart
              className="text-coral-red cursor-pointer"
              size={"25"}
              onClick={() => deleteFromLike(id)}
            />
          ) : (
            <AiOutlineHeart
              className="cursor-pointer"
              size={"25"}
              onClick={() => addToLike({ imgURL, name, price })}
            />
          )}
          <AiOutlineDelete
            className="cursor-pointer"
            size={"25"}
            onClick={() => deleteFromCard(imgURL)}
          />
        </div>
      </div>
    </div>
  );
}

export default CartProd;
