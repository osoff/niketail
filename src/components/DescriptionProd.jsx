import { AiOutlineHeart } from "react-icons/ai";
import { useProduct } from "../contexts/ProductsContexts";
import Button from "./Button";
import { star } from "../assets/icons";

function DescriptionProd() {
  const { currentProd, addToCard, addToLike } = useProduct();
  const { imageUrl: imgURL, name, price } = currentProd;
  const prodToBag = {
    imgURL: "https://" + imgURL,
    name,
    price: price?.current.text,
  };
  return (
    <div className="flex-col flex w-[30rem] gap-5">
      <h2 className=" font-palanquin text-3xl  font-bold text-coral-red ">
        {currentProd.name}
      </h2>
      <div>
        <h3 className="font-palanquin text-2xl">
          Brand: <span className=" font-bold">{currentProd.brandName}</span>
        </h3>
        <h3 className=" font-semibold font-montserrat text-coral-red text-2xl leading-normal mt-4">
          {currentProd.price?.current.text}
        </h3>
      </div>
      <Button onClick={() => addToCard(prodToBag)}>Add to Bag</Button>
      <Button onClick={() => addToLike(prodToBag)} bgC={"bg-transparent"}>
        Favorite <AiOutlineHeart />
      </Button>
      <p className=" info-text text-center">
        This product is excluded from site promotions and discounts.
      </p>
      <div className="border-b p-4">
        <p className="text-2xl font-palanquin ">Free delivery and return</p>
      </div>
      <div className="flex justify-between items-center border-b p-4">
        <p className="font-palanquin text-2xl">Reviews</p>
        <div className="flex justify-start items-center gap-2.5">
          <img src={star} alt="rating" height={24} width={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionProd;