import { useEffect } from "react";
import { useProduct } from "../contexts/ProductsContexts";
import CartElements from "../sections/CartElements";
import Fav from "../sections/Fav";
import Recomendation from "../sections/Recomendation";

function Card() {
  const { likeProds } = useProduct();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="padding w-full dark:text-white">
        <CartElements />
      </section>
      {likeProds.length > 0 && (
        <section className=" pt-6 padding-x bg-pale-blue dark:bg dark:bg-zinc-950">
          <Fav button={false} />
        </section>
      )}
      <section className="  pt-6 padding-x pb-20">
        <Recomendation />
      </section>
    </>
  );
}

export default Card;
