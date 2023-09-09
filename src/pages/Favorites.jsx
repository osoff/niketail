import { useEffect } from "react";
import { useProduct } from "../contexts/ProductsContexts";
import Fav from "../sections/Fav";
import Recomendation from "../sections/Recomendation";

function Favorites() {
  const { recProds } = useProduct();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="padding">
        <Fav />
        <Recomendation recomendationProducts={recProds} />
      </section>
    </>
  );
}

export default Favorites;
