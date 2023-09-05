import { createContext, useContext, useReducer, useEffect } from "react";
import { products } from "../constants";

const ProductsContext = createContext();

const initialState = {
  likeProds: [],
  cardProds: [],
  currentProd: {},
  recProds: products,
  isLoading: false,
  error: "",

  sortBy: "",
  search: "",
  products: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "addToCard":
      return {
        ...state,
        cardProds: [...state.cardProds, action.payload],
        recProds: state.recProds.filter(
          (el) => el.imgURL !== action.payload.imgURL
        ),
      };
    case "deleteFromCard":
      return {
        ...state,
        cardProds: state.cardProds.filter((el) => el.imgURL !== action.payload),
      };
    case "addToLike":
      return {
        ...state,
        likeProds: [...state.likeProds, action.payload],
        recProds: state.recProds.filter(
          (el) => el.imgURL !== action.payload.imgURL
        ),
      };
    case "deleteFromLike":
      return {
        ...state,
        likeProds: state.likeProds.filter((el) => el.imgURL !== action.payload),
      };
    case "setSearchPar":
      return {
        ...state,
        search: action.payload,
      };
    case "setSort": {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    default:
      throw new Error("Unknown Action");
  }
}

function ProductsProviders({ children }) {
  const [
    {
      likeProds,
      cardProds,
      currentProd,
      isLoading,
      error,
      recProds,
      search,
      sortBy,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    dispatch({ type: "loading" });
  }, []);

  function addToCard(product) {
    dispatch({ type: "addToCard", payload: product });
  }
  function deleteFromCard(imgURL) {
    dispatch({ type: "deleteFromCard", payload: imgURL });
  }
  function addToLike(product) {
    dispatch({ type: "addToLike", payload: product });
  }
  function deleteFromLike(imgURL) {
    dispatch({ type: "deleteFromLike", payload: imgURL });
  }
  function setSearchPar(search) {
    dispatch({ type: "setSearchPar", payload: search });
  }
  function setSelectedOption(selectOptions) {
    dispatch({ type: "setSort", payload: selectOptions });
  }

  return (
    <ProductsContext.Provider
      value={{
        likeProds,
        cardProds,
        currentProd,
        isLoading,
        recProds,
        error,
        addToCard,
        deleteFromCard,
        addToLike,
        deleteFromLike,
        setSearchPar,
        search,
        setSelectedOption,
        sortBy,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
function useProduct() {
  const context = useContext(ProductsContext);
  if (context === undefined) throw new Error("Context used unpermission");
  return context;
}
export { ProductsProviders, useProduct };
