import Input from "../components/Input";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useProduct } from "../contexts/ProductsContexts";
import { useNavigate } from "react-router-dom";
const options = [
  { value: "desc", label: "Hight-Low" },
  { value: "asc", label: "Low-Hight" },
];
function Search() {
  const navigate = useNavigate();

  const { search, setSearchPar, sortBy, setSelectedOption } = useProduct();
  function setSerachParam() {
    navigate(`?search=${search}`);
  }

  // useEffect(
  //   function () {
  //     navigate.arguments(`?sortBy=${sortBy}`);
  //   },
  //   [sortBy, navigate]
  // );
  return (
    <div className="flex justify-between">
      <h2 className="font-palanquin font-bold text-3xl text-coral-red">
        Products
      </h2>
      <div className="flex items-center gap-5">
        <Input
          textButton={<AiOutlineSearch />}
          padding="0"
          placeholder={"Search"}
          getInputData={setSearchPar}
          actionButton={setSerachParam}
        />
        {/* <select
          onChange={(e) => setSelectedOption(e.target.value)}
          className="input border border-black p-3.5 rounded-full"
          defaultValue={"default"}
        >
          <option value="default" disabled hidden>
            Sorted By
          </option>
          {options.map((el) => (
            <option key={el.value} value={el.value}>
              {el.label}
            </option>
          ))}
        </select> */}
      </div>
    </div>
  );
}

export default Search;
