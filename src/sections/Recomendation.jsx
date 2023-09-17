import { Link } from "react-router-dom";
import { useProduct } from "../contexts/ProductsContexts";
import PopularProdCard from "../components/PopularProdCard";

function Recomendation() {
  const { recProds } = useProduct();
  console.log(recProds);
  return (
    recProds && (
      <>
        <h2 className=" text-coral-re text-xl font-bold dark:text-white">
          You might like it
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ">
          {recProds.map((el) => (
            <Link
              key={el.id}
              to={`/niketail/products/${el.id}`}
              className=" p-5 hover:cursor-pointer hover:bg-slate-50 rounded-lg dark:text-white dark:hover:bg-slate-900"
            >
              <PopularProdCard
                id={el.id}
                imgURL={`https://${el.imageUrl}`}
                name={el.name}
                price={el.price.current.text}
                imgRounded={true}
              />
            </Link>
          ))}
        </div>
      </>
    )
  );
}

export default Recomendation;
