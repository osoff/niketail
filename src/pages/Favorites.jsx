import { useProduct } from "../contexts/ProductsContexts";
import Fav from "../sections/Fav";
import Recomendation from "../sections/Recomendation";

function Favorites() {
  const { recProds } = useProduct();

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
