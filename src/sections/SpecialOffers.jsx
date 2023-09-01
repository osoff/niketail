import { offer } from "../assets/images";
import Button from "../components/Button";

function SpecialOffers() {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container dark:text-white">
      <div className="flex-1 ">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div>
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            <span className="text-coral-red"> Special</span> Offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button>View details</Button>
            <Button
              bgC="bg-white"
              borderC="border-slate-gray"
              txtColor="text-slate-gray"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
