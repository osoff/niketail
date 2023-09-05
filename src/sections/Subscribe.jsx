import Button from "../components/Button";
import Input from "../components/Input";

function Subscribe() {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 dark:text-white"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up from
        <span className="text-coral-red"> Updates</span> & Newsletter
      </h3>
      <Input
        textButton={"Sign Up"}
        placeholder={"example@ex.com"}
        wfull={true}
      />
    </section>
  );
}

export default Subscribe;
