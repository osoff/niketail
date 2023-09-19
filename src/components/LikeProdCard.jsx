import { star } from "../assets/icons";
import { AiFillHeart } from "react-icons/ai";
import { useProduct } from "../contexts/ProductsContexts";
import Button from "./Button";

function LikeProdCard({ id, imgURL, name, price, edit }) {
  const { deleteFromLike, addToCard, cardProds } = useProduct();
  return (
    <div className="flex flex-1 flex-col w-full relative justify-between h-full">
      {edit && (
        <AiFillHeart
          className=" absolute top-0 right-0 mt-2 mr-2 cursor-pointer text-coral-red  "
          size={"25"}
          color="red"
          onClick={(e) => {
            e.preventDefault();
            deleteFromLike(id);
          }}
        />
      )}
      <div>
        <img src={imgURL} alt={name} className=" w-full rounded-lg" />
        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating" height={24} width={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>

        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
      </div>
      <div className="  block   min-[1390px]:flex justify-center items-center ">
        <p className="  font-semibold font-montserrat text-coral-red text-2xl leading-normal">
          {price}
        </p>
        <div className="w-full flex justify-center min-[1390px]:justify-end">
          {cardProds.map((el) => el.imgURL).includes(imgURL) ? (
            <Button
              bgC={"bg-transparent"}
              txtColor={"text-white"}
              onClick={(e) => e.preventDefault()}
              otherStyle={"w-full  min-[1390px]:w-auto"}
            >
              <span className=" text-black dark:text-white  text-xs">
                Added
              </span>
            </Button>
          ) : (
            <Button
              otherStyle={"w-full min-[1390px]:w-auto"}
              onClick={(e) => {
                e.preventDefault();
                addToCard({ id, imgURL, name, price });
              }}
            >
              <span className="  text-xs">Add to your bag</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default LikeProdCard;
