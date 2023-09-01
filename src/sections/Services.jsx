import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
function Services() {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9 dark:text-white">
      {services.map((el) => (
        <ServiceCard key={el.label} {...el} />
      ))}
    </section>
  );
}

export default Services;
