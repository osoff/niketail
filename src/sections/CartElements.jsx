import CartProd from "../components/CartProd";
import { useProduct } from "../contexts/ProductsContexts";
import Chekout from "./Chekout";

function CartElements() {
  const { cardProds } = useProduct();
  return (
    <div className=" min-h-[60vh]  max-container">
      <div className="flex w-full justify-around items-start mt-4">
        <div className="w-1/2">
          <h2 className=" text-3xl font-palanquin text-coral-red font-bold">
            Bag
          </h2>
          <div className=" overflow-y-auto max-h-[75dvh] pr-6 ">
            {cardProds.length > 0 ? (
              cardProds.map((el) => <CartProd key={el.imgURL} {...el} />)
            ) : (
              <div className="flex flex1 min-h-[20rem] w-full justify-center items-center">
                <p className=" font-montserrat text-xl info-text ">
                  Your bag is clear :(
                </p>
              </div>
            )}
          </div>
        </div>
        <Chekout />
      </div>
    </div>
  );
}

export default CartElements;
