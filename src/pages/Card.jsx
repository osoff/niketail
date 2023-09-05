import { useEffect } from "react";
import { useProduct } from "../contexts/ProductsContexts";
import CartElements from "../sections/CartElements";
import Fav from "../sections/Fav";
import Recomendation from "../sections/Recomendation";
const url =
  "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=20&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3c32af3ff6msh18e4ec170833a06p1767bajsnc9dcb02894bb",
    "X-RapidAPI-Host": "asos2.p.rapidapi.com",
  },
};
function Card() {
  useEffect(function () {
    async function getProd() {
      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data);
    }
    getProd();
  }, []);

  const { recProd, likeProds } = useProduct();
  return (
    <>
      <section className=" padding  w-full dark:text-white">
        <CartElements />
      </section>
      {likeProds.length > 0 && (
        <section className=" padding-x bg-pale-blue dark:bg dark:bg-zinc-950">
          <Fav button={false} />
        </section>
      )}
      <section className="padding-x pb-20">
        <Recomendation recomendationProducts={recProd} />
      </section>
    </>
  );
}

export default Card;
