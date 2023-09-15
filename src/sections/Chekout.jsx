import Button from "../components/Button";
import Input from "../components/Input";
import { useProduct } from "../contexts/ProductsContexts";

function Chekout() {
  const { cardProds } = useProduct();
  return (
    <div className="flex flex-col shadow-xl lg:w-auto w-full p-10 rounded-md dark:border-[1px] dark: white">
      <h2 className=" font-palanquin text-2xl font-bold text-coral-red ">
        Summary
      </h2>
      <div className="mt-3 font-palanquin">
        <Input
          textButton={"Apply"}
          placeholder={"Enter your promo code"}
          padding="0"
        />
      </div>
      <div className=" font-montserrat flex mt-5 justify-between ">
        <h3>Subtotal</h3>
        <p>&mdash;</p>
      </div>
      <div className=" font-montserrat flex mt-3 justify-between border-b-[1px] pb-2">
        <h3>Estimated Delivery & Handling</h3>
        <p>Free</p>
      </div>
      <div className=" font-montserrat flex mt-3 justify-between uppercase font-bold mb-5">
        <h3>Total</h3>
        <p>
          $
          {cardProds
            .reduce(
              (acc, el) => (acc = acc + Number(el.price.split("$").at(1))),
              0
            )
            .toFixed(2)}
        </p>
      </div>
      <Button>Checkout</Button>
    </div>
  );
}

export default Chekout;
