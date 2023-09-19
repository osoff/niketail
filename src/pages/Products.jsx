import { useSearchParams } from "react-router-dom";
import Search from "../sections/Search";
import { useEffect } from "react";
import { useProduct } from "../contexts/ProductsContexts";
import { dataAsos } from "../constants";
import Loader from "../components/Loader";
import ErrorMes from "../components/ErrorMes";
import ProductsList from "../sections/ProductsList";
import { useKey } from "../hooks/useKey";

function Products() {
  const [params] = useSearchParams();

  const { dispatch, isLoading, error } = useProduct();
  const search = params.get("search");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(
    function () {
      async function getProd() {
        dispatch({ type: "loading" });

        let data;
        setTimeout(() => {
          data = dataAsos;
          try {
            if (search === "" || search === "null" || search === null) {
              dispatch({
                type: "products/loaded",
                payload: data.data.products,
              });
            } else {
              dispatch({
                type: "products/loaded",
                payload: data.data.products.filter((el) =>
                  el.name.toLowerCase().includes(search.toLowerCase())
                ),
              });
              if (
                data.data.products.filter((el) =>
                  el.name.toLowerCase().includes(search.toLowerCase())
                ).length === 0
              ) {
                throw new Error("Products not found");
              }
            }
          } catch (e) {
            dispatch({ type: "rejected", payload: e.message });
          }
        }, 1000);
      }
      getProd();
    },
    [search, dispatch]
  );
  return (
    <div className="pt-20 sm:pt-8">
      <section className="padding">
        <Search />
      </section>
      <section
        className={`px-8  min-h-[70dvh] ${
          isLoading || error ? "flex justify-center  items-center " : ""
        }`}
      >
        {isLoading && <Loader />}
        {error && <ErrorMes text={error} />}
        {!isLoading && !error && <ProductsList />}
      </section>
    </div>
  );
}

export default Products;
