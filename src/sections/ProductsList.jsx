import { Link } from "react-router-dom";
import { useProduct } from "../contexts/ProductsContexts";
import PopularProdCard from "../components/PopularProdCard";

function ProductsList() {
  const { products } = useProduct();
  return (
    <div className=" grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 mb-28">
      {products.map((el) => (
        <Link
          key={el.id}
          to={`${el.id}`}
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
  );
}

export default ProductsList;
