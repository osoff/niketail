import { useNavigate, useParams } from "react-router-dom";
import { useKey } from "../hooks/useKey";
import MainViewProduct from "../sections/MainViewProduct";
import { useEffect } from "react";

function ProductElement() {
  const { id } = useParams();
  const navigate = useNavigate();
  useKey("Escape", () => navigate("/products"));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="padding  w-full dark:text-white">
        <MainViewProduct idProd={id} />
      </section>
    </>
  );
}

export default ProductElement;
