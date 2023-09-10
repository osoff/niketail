import { useEffect } from "react";
import Fav from "../sections/Fav";
import Recomendation from "../sections/Recomendation";

function Favorites() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="padding">
        <Fav />
        <Recomendation />
      </section>
    </>
  );
}

export default Favorites;
