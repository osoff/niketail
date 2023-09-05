import { useState } from "react";
import Button from "../components/Button";
import { useProduct } from "../contexts/ProductsContexts";
import LikeProdCard from "../components/LikeProdCard";

function Fav({ button = true }) {
  const { likeProds } = useProduct();
  const [edit, setEdit] = useState(false);
  return (
    <section className="w-full gap-10 p-2 dark:text-white">
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
        className={`flex justify-${
          likeProds.length > 0 ? "start" : "center"
        } items-center mt-5 gap-16 w-full min-h-[60vh]`}
      >
        {likeProds.length > 0 ? (
          likeProds.map((el, i) => (
            <div key={i}>
              <LikeProdCard {...el} edit={edit} />
            </div>
          ))
        ) : (
          <h3 className=" font-palanquin info-text">
            Items added to your Favourites will be saved here.
          </h3>
        )}
      </div>
    </section>
  );
}

export default Fav;
