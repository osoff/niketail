import PopularProdCard from "../components/PopularProdCard";
import { products } from "../constants";

function PopularProd({
  text,
  textsize = "4xl",
  marginTop,
  recomendationProducts = products,
}) {
  return (
    <section id="products" className="max-container dark:text-white">
      <div className="flex flex-col justify-start gap-5">
        <h2 className={`text-${textsize}  font-palanquin font-bold `}>
          {!text ? (
            <>
              <span className="text-coral-red">Popular</span> Products
            </>
          ) : (
            <span>{text}</span>
          )}
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          {!text &&
            "Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value"}
        </p>
      </div>
      <div
        className={`${
          marginTop ? `mt-${marginTop}` : "mt-16"
        }  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14`}
      >
        {recomendationProducts.map((prod) => (
          <PopularProdCard key={prod.imgURL} {...prod} viewHeart={false} />
        ))}
      </div>
    </section>
  );
}

export default PopularProd;
