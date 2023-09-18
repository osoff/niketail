import { useEffect } from "react";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (
        !ref.at(0).current ||
        ref.at(0).current.contains(event.target) ||
        !ref.at(1).current ||
        ref.at(1).current.contains(event.target)
      )
        return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}
export default useOnClickOutside;
