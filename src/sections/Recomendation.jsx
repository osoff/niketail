import { products } from "../constants";
import PopularProd from "./PopularProd";

function Recomendation({ recomendationProducts = products }) {
  return (
    <div className=" mt-20 ">
      <PopularProd
        text="You Might Also Like"
        textsize={"xl"}
        marginTop={"5"}
        recomendationProducts={recomendationProducts}
      />
    </div>
  );
}

export default Recomendation;
