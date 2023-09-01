import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

function CustomerReviews() {
  return (
    <section className="max-container dark:text-white">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our?
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="info-text  mt-4 max-w-lg m-auto text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly  items-center max-lg: flex-col gap-14">
        {reviews.map((el) => (
          <ReviewCard key={el.customerName} {...el} />
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;
