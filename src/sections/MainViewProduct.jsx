import PreviewCard from "../components/PreviewCard";
import { useEffect } from "react";
import { useProduct } from "../contexts/ProductsContexts";
import { dataAsos } from "../constants";
import DescriptionProd from "../components/DescriptionProd";

function MainViewProduct({ idProd }) {
  const { dispatch } = useProduct();
  useEffect(
    function () {
      const currProd = dataAsos.data.products
        .filter((el) => String(el.id) === String(idProd))
        .at(0);
      console.log(currProd);
      dispatch({ type: "product/selected", payload: currProd });
    },
    [dispatch, idProd]
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="flex md:justify-evenly md:flex-row md:items-start flex-col items-center sm:pt-5 pt-16 gap-3 ">
      <PreviewCard />
      <DescriptionProd />
    </section>
  );
}

export default MainViewProduct;
