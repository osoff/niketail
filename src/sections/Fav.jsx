import { useState } from "react";
import Button from "../components/Button";
import { useProduct } from "../contexts/ProductsContexts";
import LikeProdCard from "../components/LikeProdCard";
import { Link } from "react-router-dom";

function Fav({ button = true }) {
  const { likeProds } = useProduct();
  const [edit, setEdit] = useState(false);
  return (
    <section className="w-full gap-10 dark:text-white pt-20 sm:pt-8">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-xl font-palanquin font-bold">
          <span className="text-coral-red bg">Favorite</span> Products
        </h2>
        {button && (
          <Button
            bgC={edit ? "bg-white" : ""}
            onClick={() => setEdit((edit) => !edit)}
          >
            {!edit ? "Edit" : "Cancel"}
          </Button>
        )}
      </div>
      <div
        className={`${
          likeProds.length === 0
            ? "flex justify-center items-center mt-5 gap-16 w-full min-h-[70vh]"
            : "grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 mb-28"
        }`}
      >
        {likeProds.length > 0 ? (
          likeProds.map((el) => (
            <Link
              key={el.id}
              to={`/products/${el.id}`}
              className=" p-5 hover:cursor-pointer hover:bg-slate-50 rounded-lg dark:text-white dark:hover:bg-[#141414]"
            >
              <LikeProdCard {...el} edit={edit} />
            </Link>
          ))
        ) : (
          <h3 className=" font-palanquin info-text text-center">
            Items added to your Favourites will be saved here.
          </h3>
        )}
      </div>
    </section>
  );
}

export default Fav;
