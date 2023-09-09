import PreviewCard from "../components/PreviewCard";
import { useEffect } from "react";
import { useProduct } from "../contexts/ProductsContexts";
import { dataAsos } from "../constants";
import DescriptionProd from "../components/descriptionProd";

function MainViewProduct({ idProd }) {
  const { dispatch } = useProduct();
  useEffect(
    function () {
      const currProd = dataAsos.data.products
        .filter((el) => String(el.id) === String(idProd))
        .at(0);
      dispatch({ type: "product/selected", payload: currProd });
    },
    [dispatch, idProd]
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="flex justify-around items-start mt-5">
      <PreviewCard />
      <DescriptionProd />
    </section>
  );
}

export default MainViewProduct;
