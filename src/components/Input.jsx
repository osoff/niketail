import { useSearchParams } from "react-router-dom";
import Button from "./Button";

function Input({
  textButton,
  placeholder,
  wfull,
  padding = "2.5",
  getInputData,
  actionButton,
}) {
  const [params] = useSearchParams();
  const search = params.get("search");
  return (
    <div
      className={`${
        wfull ? "lg:max-w-[40%] w-full" : ""
      } flex items-center max-sm:flex-col gap-5 p-${padding} sm:border sm:border-slate-gray rounded-full`}
    >
      <input
        type="text"
        defaultValue={search === "null" ? " " : search}
        placeholder={placeholder}
        onChange={(e) => getInputData(e.target.value)}
        className="input text-black dark:bg-black dark:text-white rounded-full "
      />
      <div className="flex max-sm:justify-end items-center max-sm:w-full ">
        <Button onClick={() => actionButton()}>{textButton}</Button>
      </div>
    </div>
  );
}

export default Input;
