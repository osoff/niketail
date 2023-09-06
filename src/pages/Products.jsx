import { Link, useParams, useSearchParams } from "react-router-dom";
import Search from "../sections/Search";
import { useEffect, useState } from "react";
import { useProduct } from "../contexts/ProductsContexts";
import { dataAsos } from "../constants";
import Loader from "../components/Loader";
import Error from "../components/ErrorMes";
import PopularProd from "../sections/PopularProd";
import PopularProdCard from "../components/PopularProdCard";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3c32af3ff6msh18e4ec170833a06p1767bajsnc9dcb02894bb",
    "X-RapidAPI-Host": "asos10.p.rapidapi.com",
  },
};

function Products() {
  const [params] = useSearchParams();

  const { dispatch, products, isLoading, error } = useProduct();
  const search = params.get("search");

  useEffect(
    function () {
      async function getProd() {
        try {
          dispatch({ type: "loading" });
          // const res = await fetch(
          //   `https://asos10.p.rapidapi.com/api/v1/getProductListBySearchTerm?searchTerm=${
          //     search === "" || "null" ? "Boots" : search
          //   }&currency=USD&country=US&store=US&languageShort=en&sizeSchema=US&limit=50&offset=0`,
          //   options
          // );
          // const data = await res.json();
          let data;
          setTimeout(() => {
            data = dataAsos;
            console.log(data.data.products);
            if (data.data.itemCount === 0) {
              throw new Error("Products not found");
            }
            dispatch({ type: "products/loaded", payload: data.data.products });
          }, 2000);
        } catch (err) {
          console.log("qwewqe");
          dispatch({ type: "rejected", payload: err.message });
        }
      }
      getProd();
    },
    [search, dispatch]
  );
  return (
    <>
      <section className="padding">
        <Search />
      </section>
      <section
        className={`px-8  min-h-[70dvh] ${
          isLoading || error ? "flex justify-center  items-center " : ""
        }`}
      >
        {isLoading && <Loader />}
        {error && <Error text={error} />}
        {!isLoading && !error && (
          <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 mb-28">
            {products.map((el) => (
              <Link
                to={`${el.id}`}
                className=" p-5 hover:cursor-pointer hover:bg-slate-50 rounded-lg dark:text-white dark:hover:bg-slate-900"
              >
                <div key={el.id}>
                  <PopularProdCard
                    imgURL={`https://${el.imageUrl}`}
                    name={el.name}
                    price={el.price.current.text}
                    imgRounded={true}
                  />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Products;
