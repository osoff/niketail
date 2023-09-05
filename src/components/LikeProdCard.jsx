import { star } from "../assets/icons";
import { AiFillHeart } from "react-icons/ai";
import { useProduct } from "../contexts/ProductsContexts";
import Button from "./Button";

function LikeProdCard({ imgURL, name, price, edit }) {
  const { deleteFromLike, addToCard, cardProds } = useProduct();
  return (
    <div className="flex flex-1 flex-col w-full relative">
      {edit && (
        <AiFillHeart
          className=" absolute top-0 right-0 mt-2 mr-2 cursor-pointer text-coral-red ease-in duration-200 "
          size={"25"}
          color="red"
          onClick={() => {
            deleteFromLike(imgURL);
          }}
        />
      )}
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
        {cardProds.map((el) => el.imgURL).includes(imgURL) ? (
          <Button bgC={"bg-transparent"} txtColor={"text-white"}>
            <span className=" text-black dark:text-white text-xs">Added</span>
          </Button>
        ) : (
          <Button onClick={() => addToCard({ imgURL, name, price })}>
            <span className="  text-xs">Add to your bag</span>
          </Button>
        )}
      </div>
    </div>
  );
}

export default LikeProdCard;
