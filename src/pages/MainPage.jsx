import Hero from "../sections/Hero";
import PopularProd from "../sections/PopularProd";
import Services from "../sections/Services";
import SuperQuality from "../sections/SuperQuality";
import SpecialOffers from "../sections/SpecialOffers";
import CustomerReviews from "../sections/CustomerReviews";
import Subscribe from "../sections/Subscribe";
import { useEffect } from "react";

function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProd />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding dark:bg-zinc-950">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
    </>
  );
}

export default MainPage;
